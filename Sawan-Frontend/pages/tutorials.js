import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css'
import style from '../styles/Banner.module.css'
import two from '../public/images/day12-bed.png'
import seven from '../public/images/day34-ticket.png'
import five from '../public/images/day21-Lantern.png'
import six from '../public/images/day29-selfie-boy.png'
import one from '../public/images/day10-canvas-stand.png'
import three from '../public/images/day15-color-tool.png'
import four from '../public/images/day19-apple-watch.png'
import eight from '../public/images/day31-sweet-home.png'
import Cardimage from '../public/images/120-power-of-pen.png'
import categoryImage from '../public/images/day29-selfie-boy.png'


const Tutorials = () => {
  const Banner = <div className={style.category_section}>
  <div className={style.category_container}>
    <div className={style.category_logo}>
      <Image src={categoryImage} className={style.category_image} alt="category Image" width="600px" height="500px" />
    </div>


    <div className={style.category_about}>
      <div className={style.category_heading}>
        <h2 className={style.header}>Welcome to Tutorials Section</h2>
        <div className={style.line}></div>
      </div>
      <h3>About</h3>
      <p>Let us introduce your child into the world of mammals! Choose any free printable coloring page
        among hundreds of cute farm and wild animals, rainforest animals, sea and ocean animals, jungle
        and zoo baby animals and many more.</p>

    </div>
  </div>
</div>
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Tutorials Section</title>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Nav></Nav>
    {Banner}
   
    <div className={styles.card_section}>

<h1 className={styles.category_header}>Tutorials</h1>
<div className={styles.line}>

</div>
<div className={styles.card_container}>

<div className={styles.card}>
<Image className={styles.image_card} src={Cardimage} alt="Picture of the author" width="500px" height="450px" />
<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>
</div>
<div className={styles.card}>
<Image className={styles.image_card} src={one} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={two} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={three} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={four} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={five} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={six} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={seven} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={eight} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={Cardimage} alt="Picture of the author" width="500px" height="450px" />
<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>
</div>
<div className={styles.card}>
<Image className={styles.image_card} src={one} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={two} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={three} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={four} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={five} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={six} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={seven} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>
<div className={styles.card}>
<Image className={styles.image_card} src={eight} alt="Picture of the author" width="500px" height="450px" />

<Link href="./category" passHref>

<button className={styles.button_sub_category}>Mammels</button>
</Link>

</div>



</div>


</div>
   <Footer></Footer>
    </>
  )
}

export default Tutorials