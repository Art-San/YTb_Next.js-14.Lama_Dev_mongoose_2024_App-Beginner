import { Post, User } from './models'
import { connectToDb } from './utils'
// import { unstable_noStore as noStore } from 'next/cache'

// TEMPORARY DATA
// const users = [
//   { id: 1, username: 'John' },
//   { id: 2, username: 'Jane' }
// ]

// const posts = [
//   { id: 1, title: 'Post 1', body: '......', userId: 1 },
//   { id: 2, title: 'Post 2', body: '......', userId: 1 },
//   { id: 3, title: 'Post 3', body: '......', userId: 2 },
//   { id: 4, title: 'Post 4', body: '......', userId: 2 }
// ]

// export const getPosts = async () => {
//   return posts
// }

// export const getPost = async (id) => {
//   const post = posts.find((post) => post.id === +id)
//   return post
// }
// export const getUser = async (userId) => {
//   const user = users.find((user) => user.id === +userId)
//   return user
// }

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (err) {
    console.log(err)
    throw new Error('Не удалось получить пост!')
  }
}

export const getPost = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findOne({ slug })
    return post
  } catch (err) {
    console.log(err)
    throw new Error('Не удалось получить пост по слагу!')
  }
}

export const getUser = async (id) => {
  // noStore()
  try {
    connectToDb()
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.log(err)
    throw new Error('Не удалось получить юзера по id!')
  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()
    return users
  } catch (err) {
    console.log(err)
    throw new Error('Не удалось получить юзеров!')
  }
}
