import Image from 'next/image'

const AboutPage = () => {
  return (
    <div>
      {/* <img src="/about.png" alt="" /> */}
      <Image src="/about.png" alt="" width={300} height={300} />
    </div>
  )
}

export default AboutPage
