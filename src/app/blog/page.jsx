import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: { revalidate: 3600 }
//   })
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { // подойдет если в бд данные часто меняются
//     cache: 'no-store'
//   })
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', { // подойдет если в бд данные не меняются
//     cache: 'force-cache'
//   })

//   if (!res.ok) {
//     throw new Error('Что-то пошло не так')
//   }

//   return res.json()
// }
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    throw new Error('Что-то пошло не так')
  }

  return res.json()
}
const BlogPage = async () => {
  // ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ API
  const posts = await getData()

  // ПОЛУЧЕНИЕ ДАННЫХ БЕЗ API
  // const posts = await getPosts()

  // const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}

      {/* <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div> */}
    </div>
  )
}

export default BlogPage

// import PostCard from "@/components/postCard/postCard";
// import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

// // FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

// const BlogPage = async () => {

//   // FETCH DATA WITH AN API
//   const posts = await getData();

//   // FETCH DATA WITHOUT AN API
//   // const posts = await getPosts();

//   return (
//     <div className={styles.container}>
//       {posts.map((post) => (
//         <div className={styles.post} key={post.id}>
//           <PostCard post={post} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;
