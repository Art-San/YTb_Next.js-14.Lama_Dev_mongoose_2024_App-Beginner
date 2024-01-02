'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// 2:10:22
const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter()
  // const pathname = usePathname()
  const searchParams = useSearchParams()

  const ifSo = searchParams.get('ifSo')

  console.log('ifSo', ifSo)
  // console.log('pathname', pathname)
  const handleClick = () => {
    console.log('clicked')
    // router.refresh() // обновляет страницу
    // router.replace('/') // replace без записи в историю браузера, не получится вернуться

    // router.push('/')
    // router.back() // назад
    router.forward() // вперед
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
