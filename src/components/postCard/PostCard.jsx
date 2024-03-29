import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({ post }) => {
  // console.log('PostCard  post.slug 2:52:03', post)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )} */}
        <div className={styles.imgContainer}>
          <Image
            src={post.img || '/noavatar.png'}
            alt=""
            fill
            className={styles.img}
          />
        </div>

        <span className={styles.date}>
          {post.createdAt.toString().slice(0, 10)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post?.title}</h1>
        <p className={styles.desc}>{post?.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
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
