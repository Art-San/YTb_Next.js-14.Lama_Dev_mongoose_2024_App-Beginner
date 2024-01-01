'use client'
import Image from 'next/image'
import styles from './contact.module.css'
import { useEffect, useState } from 'react'
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

// export const metadata = {
//   title: 'Contact Page',
//   description: 'Contact description'
// }

const ContactPage = () => {
  const [isClient, setIsClie] = useState(false)
  const a = Math.random()

  console.log(a)
  // console.log('it works here!')
  useEffect(() => {
    // 2:01:05
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt=""
          fill
          className={styles.img}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {a}
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
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
          <button onClick={() => console.log('clicked')}>Send</button>
        </form>
        {/* <button onClick={() => console.log('clicked')}>Send</button> */}
      </div>
    </div>
  )
}

export default ContactPage
