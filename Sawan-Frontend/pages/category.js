import Image from 'next/image'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Card from "../components/Card"
import styles from '../styles/Category.module.css'
import categoryImage from '../public/images/day15-color-tool.png'


const Category = () => {
return (
<>

 <Nav></Nav>

    <div className={styles.category_section}>
        <div className={styles.category_container}>
            <div className={styles.category_logo}>
                <Image src={categoryImage} className={styles.category_image} alt="category Image" width="600px"
                    height="500px"></Image>
            </div>


            <div className={styles.category_about}>
                <div className={styles.category_heading}>
                    <h2 className={styles.header}>Mammels</h2>
                    <div className={styles.line}></div>
                </div>
                <h3>About</h3>
                <p>Let us introduce your child into the world of mammals! Choose any free printable coloring page
                    among hundreds of cute farm and wild animals, rainforest animals, sea and ocean animals, jungle
                    and zoo baby animals and many more.</p>

            </div>
        </div>
    </div>

    <Card></Card>
    <Footer></Footer>
</>
)
}

export default Category