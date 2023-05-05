import Mainpage from '@/components/mainpage/mainpage'
import { Inter } from 'next/font/google'
// import Hero from '@/components/hero'
// import Mainpage from '@/components/mainpage'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      {/* <Hero/> */}
      <Mainpage/>
     
     
    </div>
  )
}
