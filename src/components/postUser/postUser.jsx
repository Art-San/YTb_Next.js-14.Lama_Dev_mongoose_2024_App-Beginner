import { getUser } from '@/lib/data'
import styles from './postUser.module.css'
import Image from 'next/image'
// 2:26:37
// ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: 'no-store' }
//   )

//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }

//   return res.json()
// }

const PostUser = async ({ userId }) => {
  // ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ API
  // const user = await getData(userId)

  // ПОЛУЧЕНИЕ ДАННЫХ БЕЗ API
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user?.img ? user.img : '/noavatar.png'}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>
          {user?.username || 'пока не известен'}
        </span>
      </div>
    </div>
  )
}

export default PostUser
