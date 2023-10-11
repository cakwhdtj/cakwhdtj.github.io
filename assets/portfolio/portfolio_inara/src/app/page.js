import Image from 'next/image'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './footer'


export default function Home() {
  const n = 1;
  return (
    <>
    {Header()}
    <main>
      {`Section${n}`}
    </main>
    {Footer()}
    </>
  )
}
