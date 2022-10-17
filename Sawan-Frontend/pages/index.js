/* eslint-disable react/jsx-key */
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css'
import style from '../styles/Banner.module.css'
import categoryImage from '../public/images/day84-reindeer.png'


const Home = (props) => {
const myLoader = ({ src, width, quality }) => {
return `http://localhost:1337${src}?w="${width}?q=${quality || 75}`
}

return (
<>

  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />  
    <title>Welcome to Coloring Section</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Nav></Nav>
  {/* Start of Static Banner */}
  <div className={style.category_section}>
    <div className={style.category_container}>
      <div className={style.category_logo}>
        <Image src={categoryImage} className={style.category_image} alt="category Image" width="600px" height="500px" />
      </div>
      <div className={style.category_about}>
        <div className={style.category_heading}>
          <h2 className={style.header}>Welcome to Coloring Section</h2>
          <div className={style.line}></div>
        </div>
        <h3>About</h3>
        <p>Let us introduce your child into the world of mammals! Choose any free printable coloring page
          among hundreds of cute farm and wild animals, rainforest animals, sea and ocean animals, jungle
          and zoo baby animals and many more.</p>
      </div>
    </div>
  </div>
  {/* End of Static Banner */}

  {/* Start of Category Card */}
  <div className={styles.container}>
    <div className={styles.card_section}>
      <h1 className={styles.category_header}>Coloring Books</h1>
      <div className={styles.line}>
      </div>
      <div className={styles.card_container}>
        {props.categories.data.map((category) => {
        return (
        <div className={styles.card}>
          <Image loader={myLoader} className={styles.image_card} src={category.attributes.cover.data &&
            category.attributes.cover.data.attributes.url} alt={category.attributes.title} width={500} height={450} />
          <Link href={`/colorings/${category.attributes.slug}`} passHref>
          <button className={styles.button_sub_category}>{category.attributes.title}</button>
          </Link>
        </div>
        )
        })}
      </div>
    </div>
  </div>
  {/* End of Category Card */}

  <Footer></Footer>
</>
)

}
// Creating API Request From Starpi Server

export async function getServerSideProps(context) {
let a = await fetch("http://localhost:1337/api/coloring-categories?populate=*")
let categories = await a.json()
console.log(categories)
return {
props: { categories: categories }
}
}
export default Home;