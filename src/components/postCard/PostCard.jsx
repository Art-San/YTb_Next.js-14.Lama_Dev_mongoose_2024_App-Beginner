import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.img} />
        </div>

        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe velit
          nulla veniam sequi aliquam. Aut aperiam excepturi neque ipsa
          aspernatur adipisci animi nesciunt expedita doloremque illum. Voluptas
          animi est totam!
        </p>
        <Link className={styles.link} href={`/blog/`}>
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default PostCard
// import Image from 'next/image'
// import styles from './postCard.module.css'
// import Link from 'next/link'

// const PostCard = ({ post }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.top}>
//         {post.img && (
//           <div className={styles.imgContainer}>
//             <Image src={post.img} alt="" fill className={styles.img} />
//           </div>
//         )}
//         <span className={styles.date}>
//           {post.createdAt?.toString().slice(4, 16)}
//         </span>
//       </div>
//       <div className={styles.bottom}>
//         <h1 className={styles.title}>{post.title}</h1>
//         <p className={styles.desc}>{post.body}</p>
//         <Link className={styles.link} href={`/blog/${post.slug}`}>
//           READ MORE
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default PostCard
