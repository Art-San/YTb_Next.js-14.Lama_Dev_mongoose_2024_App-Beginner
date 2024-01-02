'use client'
import Link from 'next/link'
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// 2:10:22
const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  // const router = useRouter()
  // const pathname = usePathname()
  // const searchParams = useSearchParams()

  // const q = searchParams.get('q')

  // console.log('q', q)

  const handleClick = () => {
    console.log('clicked')
    // router.forward()
  }

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Написать и перенаправить</button>
    </div>
  )
}

export default NavigationTestPage
