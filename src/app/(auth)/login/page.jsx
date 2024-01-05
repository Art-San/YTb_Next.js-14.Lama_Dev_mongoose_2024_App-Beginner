// import { handleGithubLogin, handleLogOut } from '@/lib/action'
// import { auth } from '@/lib/auth'

// const LoginPage = async () => {
//   const session = await auth()

//   // console.log('session', session)

//   // const handleGitLogin = async () => {
//   //   'use server'
//   //   await signIn('github')
//   // }

//   // const handleGitLogOut = async () => {
//   //   'use server'
//   //   await signOut()
//   // }

//   return (
//     <div>
//       <h1>{session?.user?.name || 'нет никого'}</h1>
//       <form action={handleGithubLogin}>
//         <button>Login with CitHub</button>
//       </form>

//       <form action={handleLogOut}>
//         <button>LogOut with CitHub</button>
//       </form>
//     </div>
//   )
// }

// export default LoginPage

// import LoginForm from '@/components/loginForm/loginForm'
// import { handleGithubLogin, login } from '@/lib/action'
// import styles from './login.module.css'

// const LoginPage = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <form action={handleGithubLogin}>
//           <button className={styles.github}>Login with Github</button>
//         </form>
//         <form className={styles.form} action={login}>
//           <input type="text" placeholder="username" name="username" />
//           <input type="password" placeholder="password" name="password" />
//           <button>Login with Credentials</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginPage
import LoginForm from '@/components/loginForm/loginForm'
import { handleGithubLogin } from '@/lib/action'
import styles from './login.module.css'
// import { auth } from '@/lib/auth'
// import { useRouter } from 'next/navigation'

const LoginPage = async () => {
  // const router = useRouter()
  // const session = await auth()

  // console.log('LoginPage auth?.user.isAdmin', session?.user?.isAdmin)
  // session?.user && router.push('/')
  // auth?.user.isAdmin && router.push('/')

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
