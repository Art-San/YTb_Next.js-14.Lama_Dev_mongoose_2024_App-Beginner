import Image from 'next/image'
import styles from './singlePost.module.css'
const SinglePostPage = ({ params }) => {
  console.log('SinglePostPage params,', params)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit placeat nihil culpa a perferendis cum, quidem
          necessitatibus, quo explicabo repellat vel odit labore iste eos, totam
          atque fugit modi eius.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage

// import Image from "next/image";
// import styles from "./singlePost.module.css";
// import PostUser from "@/components/postUser/postUser";
// import { Suspense } from "react";
// import { getPost } from "@/lib/data";

// // FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

// const SinglePostPage = async ({ params }) => {
//   const { slug } = params;

//   // FETCH DATA WITH AN API
//   const post = await getData(slug);

//   // FETCH DATA WITHOUT AN API
//   // const post = await getPost(slug);

//   return (
//     <div className={styles.container}>
//       {post.img && (
//         <div className={styles.imgContainer}>
//           <Image src={post.img} alt="" fill className={styles.img} />
//         </div>
//       )}
//       <div className={styles.textContainer}>
//         <h1 className={styles.title}>{post.title}</h1>
//         <div className={styles.detail}>
//           {post && (
//             <Suspense fallback={<div>Loading...</div>}>
//               <PostUser userId={post.userId} />
//             </Suspense>
//           )}
//           <div className={styles.detailText}>
//             <span className={styles.detailTitle}>Published</span>
//             <span className={styles.detailValue}>
//               {post.createdAt.toString().slice(4, 16)}
//             </span>
//           </div>
//         </div>
//         <div className={styles.content}>{post.desc}</div>
//       </div>
//     </div>
//   );
// };

// export default SinglePostPage;
