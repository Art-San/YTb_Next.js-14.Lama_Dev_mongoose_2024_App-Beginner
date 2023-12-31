import Image from 'next/image'

const AboutPage = () => {
  return (
    <div>
      <div className="">1:02:;00</div>
      {/* <img src="/about.png" alt="" /> */}
      <Image src="/about.png" alt="" width={300} height={300} />
    </div>
  )
}

export default AboutPage
