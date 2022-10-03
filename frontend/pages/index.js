import Head from 'next/head'
import Nav from '../public/components/nav'
import Main from '../public/components/main'
import SubNav from '../public/components/subnav'
import OngoingBid from './ongoingBid'
import styles from '../styles/Home.module.css'
import Hero from '../public/components/hero'
import Footer from '../public/components/footer'
import PostProduct from './postProduct'
// import BiddingPage from './biddingPage'
import Land from '../public/components/land'
import Login from './dashboard/login'
import Signup from './signup'
import VehicleProperties from '../public/components/vehicleProperties'
import Clothing from '../public/components/clothing'
import Furniture from '../public/components/furniture'
import Electronics from '../public/components/electronics'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link href="https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner&family=Merriweather:wght@300&display=swap" rel="stylesheet"/>
              </Head> 
               <Nav/> 
      <SubNav/>
      <Main/>
      <Hero/>
      <Footer/>  
      <PostProduct/>
   {/* <VehicleProperties/>
   <Land/>
   <Clothing/>
   <Furniture/>
   <Electronics/> */}
    </div>
  )
}
