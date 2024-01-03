// 'use client' //для первого и третьего варианта вкл
import Image from 'next/image'
import styles from './contact.module.css'
// import { useEffect, useState } from 'react'
// import dynamic from 'next/dynamic'
// import HydrationTest from '@/components/hydrationTest'

// const HydrationTestNoSSR = dynamic(() => import('@/components/hydrationTest'), {
//   ssr: false
// })

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description'
}
// 2:05;10
const ContactPage = () => {
  // первый вариант
  // const [isClient, setIsClient] = useState(false)
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  // const a = Math.random()
  // console.log(a)

  // третий вариант
  // const a = Math.random()

  // console.log(a)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* {isClient && a} */}
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
          {/* <button onClick={() => console.log('clicked')}>Send</button> */}
        </form>
      </div>
    </div>
  )
}

export default ContactPage
