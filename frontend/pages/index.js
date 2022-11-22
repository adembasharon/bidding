import Head from 'next/head'
import Nav from '../public/components/nav'
import Main from '../public/components/main'
import SubNav from '../public/components/subnav'
import styles from '../styles/Home.module.css'
import Hero from '../public/components/hero'
import Footer from '../public/components/footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BidNunua</title>
         <link href="https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner&family=Merriweather:wght@300&display=swap" rel="stylesheet"/>

          </Head> 
              
               <Nav/> 
      <SubNav/>
      <Main/>
      <Hero/>
      <Footer/> 
    </div>
  )
}
