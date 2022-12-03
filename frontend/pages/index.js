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
        <title>BID n' BUY</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,600&display=swap" rel="stylesheet"/>
          
          </Head> 
              
               <Nav/> 
      <SubNav/>
      <Main/>
      <Hero/>
      <Footer/> 
    </div>
  )
}
