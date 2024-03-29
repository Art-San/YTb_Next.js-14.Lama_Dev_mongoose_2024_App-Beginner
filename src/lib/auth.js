import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Goggle from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from './utils'
import { User } from './models'
import bcrypt from 'bcryptjs'
import { authConfig } from './auth.config'

// 4:04:04
const login = async (credentials) => {
  // console.log('authConfig.callbacks', authConfig.callbacks)
  try {
    connectToDb()
    const user = await User.findOne({ username: credentials.username })

    if (!user) throw new Error('Неправильное имя!')

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw new Error('Неправильные пароль!')

    return user
  } catch (err) {
    // console.log('login! Не удалось войти!', err)
    throw new Error(err)
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Goggle({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      async authorize(credentials) {
        // console.log('auth CredentialsProvider credentials', credentials)
        try {
          const user = await login(credentials)
          // console.log('auth CredentialsProvider user', user)
          return user
        } catch (err) {
          console.log('auth CredentialsProvider err', err)
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log('user', user) // undefined
      // console.log('account', account) // данные с гит
      // console.log('profile', profile) // данные с гит профиля
      if (account.provider === 'github') {
        connectToDb()
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
              cameFrom: account.provider
            })

            await newUser.save()
          }
        } catch (err) {
          console.log(err)
          return false
        }
      }
      return true
    },
    ...authConfig.callbacks
  }
})

// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { connectToDb } from './utils'
// import { User } from './models'
// import bcrypt from 'bcryptjs'
// import { authConfig } from './auth.config'

// const login = async (credentials) => {
//   try {
//     connectToDb()
//     const user = await User.findOne({ username: credentials.username })

//     if (!user) throw new Error('Wrong credentials!')

//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     )

//     if (!isPasswordCorrect) throw new Error('Wrong credentials!')

//     return user
//   } catch (err) {
//     console.log(err)
//     throw new Error('Failed to login!')
//   }
// }

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut
// } = NextAuth({
//   ...authConfig,
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET
//     }),
//     CredentialsProvider({
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials)
//           return user
//         } catch (err) {
//           return null
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       if (account.provider === 'github') {
//         connectToDb()
//         try {
//           const user = await User.findOne({ email: profile.email })

//           if (!user) {
//             const newUser = new User({
//               username: profile.login,
//               email: profile.email,
//               image: profile.avatar_url
//             })

//             await newUser.save()
//           }
//         } catch (err) {
//           console.log(err)
//           return false
//         }
//       }
//       return true
//     },
//     ...authConfig.callbacks
//   }
// })
