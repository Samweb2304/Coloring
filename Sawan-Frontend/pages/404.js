import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styles from "../styles/404.module.css"
import image from '../public/images/error.svg'

export default function Custom404() {

return(
   <>
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>404 - Oops! Page not found.. Looks like you are looking for something that does not exist.</title>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
<div className={styles.nav_background}>
   <Nav></Nav>
   <div className={styles.error_section}>
      <Image src={image} className={styles.error_image} alt="category Image" width="400px" height="400px" />
      <h3>Oops! Page not found..</h3>
      <p>Looks like you are looking for something that does not exist. </p>
      <Link href='/'>
      <a>
         <button className={styles.image_print}>Go to Home</button>
      </a>
      </Link>
   </div>
   <Footer></Footer>
</div>
</>
)
}