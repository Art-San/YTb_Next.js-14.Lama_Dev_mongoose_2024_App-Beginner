import Link from 'next/link'
import Links from './links/Links'
import styles from './navbar.module.css'
import { auth } from '@/lib/auth'

const Navbar = async () => {
  const session = await auth()
  // console.log('Navbar session', session)

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar

// import Link from 'next/link'
// import styles from './navbar.module.css'

// const Navbar = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.logo}>logo</div>
//       <div className={''}>
//         <Link href={'/'}>Home</Link>
//         <Link href={'/about'}>About</Link>
//         <Link href={'/contact'}>Contact</Link>
//         <Link href={'/blog'}>Blog</Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar
