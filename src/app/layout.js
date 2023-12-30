// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Next App',
//   description: 'Next.js starter app'
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <h1>This is the main layout</h1>
//         {children}
//       </body>
//     </html>
//   )
// }

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Next.js 14 Homepage',
    template: '%s | Next.js 14'
  },
  description: 'Next.js starter app description'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  )
}
