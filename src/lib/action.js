'use server'

import { revalidatePath } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'
import { signIn, signOut } from './auth'
import bcrypt from 'bcryptjs'

// export const seyHello = async () => {
//   console.log('seyHello')
// }

export const addPost = async (prevState, formData) => {
  // const title = formData.get('title')
  // const desc = formData.get('desc')
  // const slug = formData.get('slug')
  // console.log('formData', title, desc, slug)

  const { title, desc, slug, img, userId } = Object.fromEntries(formData)

  try {
    connectToDb()
    const newPost = new Post({
      title,
      desc,
      slug,
      img,
      userId
    })

    console.log('action addPost newPost', newPost)
    await newPost.save()
    console.log('saved to db')
    revalidatePath('/blog') // обновит данные
    revalidatePath('/admin')
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()

    await Post.findByIdAndDelete(id)
    console.log('deleted from db')
    revalidatePath('/blog') // обновит данные
    revalidatePath('/admin') // обновит данные
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData)

  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password,
      img
    })

    await newUser.save()
    console.log('saved to db')
    revalidatePath('/admin')
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()

    await Post.deleteMany({ userId: id })
    await User.findByIdAndDelete(id)
    console.log('deleted from db')
    revalidatePath('/admin')
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const handleGithubLogin = async () => {
  'use server'
  await signIn('github')
}

export const handleGoogleLogin = async () => {
  'use server'
  await signIn('google')
}

export const handleLogOut = async () => {
  'use server'
  await signOut({ redirectTo: '/' })
  // await signOut() // так тоже можно
}

export const register = async (prevState, formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData)

  console.log('formData', username, email, password, passwordRepeat)

  if (password !== passwordRepeat) {
    // throw new Error('Пароли не совпадают')
    return { error: 'Пароли не совпадают' }
  }

  try {
    connectToDb()

    const user = await User.findOne({ username })

    if (user) {
      return { error: 'Имя пользователя уже занято' }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })

    await newUser.save()
    console.log('saved to db')

    return { success: true }
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' }
  }
}

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
  } catch (err) {
    if (err.message === 'CredentialsSignin') {
      return { error: 'Неправильное имя или пароль !!!' }
    }
    throw err
  }
}
