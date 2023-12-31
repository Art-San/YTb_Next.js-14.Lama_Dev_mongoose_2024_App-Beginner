'use client'

const days = (month) => {
  const mpnths = {
    январь: 31,
    февраль: 28,
    март: 31
  }
  return mpnths[month]
}

const Home = () => {
  console.log(days('февраль'))
  // throw new Error('error in home')
  return <div>Hello World!</div>
}

export default Home
