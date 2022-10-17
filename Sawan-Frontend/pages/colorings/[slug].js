/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Nav from "../../components/Nav"
import { useRouter } from 'next/router'
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import styles from '../../styles/Category.module.css'
  

 
const Slug = ({category}) => {
    const router = useRouter()
    const { slug } = router.query
    const myLoader = ({ src, width, quality }) => {
        return `http://localhost:1337${src}?w="${width}?q=${quality || 75}`
    }
return (
<>

  

    <Nav></Nav>

    <div className={styles.category_section}>
        <div className={styles.category_container}>
            <div className={styles.category_logo}>
                <Image loader = {myLoader} src={category.attributes.cover.data && category.attributes.cover.data.attributes.url} className={styles.category_image} alt={category.attributes.cover.data.attributes.url} width={600}
                    height={500}/>
            </div>


            <div className={styles.category_about}>
                <div className={styles.category_heading}>
                    <h2 className={styles.header}>{category.attributes.title}</h2>
                    <div className={styles.line}></div>
                </div>
                <h3>About</h3>
                <p>{category.attributes.about}</p>

            </div>
        </div>
    </div>

   
    <Footer></Footer>
</>
)
}

// Creating API Request From Starpi Server

export async function getServerSideProps(context) {
    let a = await fetch("http://localhost:1337/api/coloring-categories?filters[slug]=" + context.query.slug + "&populate=*")
    let category = await a.json()
    return{
      props: {category: category.data[0]}
    }
  }

export default Slug