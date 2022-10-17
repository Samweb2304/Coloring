import styles from '../styles/About.module.css'
import Nav from "../components/Nav"
import Head from 'next/head'
import Footer from "../components/Footer"

const about = () => {
return (
<>
<Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>About Us - The company holds an extensive portfolio of children’s books ranging from Pre-School Reference Books, Charts/Posters, and Text Books to name a few.</title>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Nav></Nav>
    <div>
        <h1 className={styles.category_header}>About Us</h1>
        <div className={styles.line}></div>
        <div className={styles.about_para}>
            <p>
                This is my autobiography, a story about my own life written by myself. I saw the light of day on 27th
                July 1880, in Tuseumbia, a little town of Northern Alabama. Caspar Keller, a native of Switzerland, was
                the one who settled in Maryland and from whom the family of my father’s side descended. I had lots of
                Swiss ancestors but the one about whom I had special regard was the first teacher of the deaf in Zurich.
                She wrote a book on the subject of their education.
                My grandfather, Caspar Keller’s son, “entered” large tracts of land in Alabama and finally settled
                there. I have been told that once a year he went from Tuscumbia to Philadelphia on horseback to purchase
                supplies for the plantation, and my aunt has in her possession many of the letters to his family, which
                give charming and vivid accounts of these trips.
               
            </p>
        </div>
        <br></br>
        <div className={styles.about_para}>
            <p>
             
                My Grandmother Keller was a daughter of one of Lafayette’s aides, Alexander Moore, and granddaughter of
                Alexander Spotswood, an early Colonial Governor of Virginia. She was also second cousin to Robert E.
                Lee.
                My father, Arthur H. Keller, was a captain in the Confederate Army, and my mother, Kate Adams, was his
                second wife and many years younger. Her grandfather, Benjamin Adams, married Susanna E. Goodhue, and
                lived in Newbury, Massachusetts, for many years. Their son, Charles Adams, was born in Newburyport,
                Massachusetts, and moved to Helena, Arkansas. When the Civil War broke out, he fought on the side of the
                South and became a brigadier-general. He married Lucy Helen Everett, who belonged to the same family of
                Everetts as Edward Everett and Dr. Edward Everett Hale. After the war was over the family moved to
                Memphis, Tennessee.
                I lived, up to the time of the illness that deprived me of my sight and hearing, in a tiny house
                consisting of a large square room and a small one, in which the servant slept. It is a custom in the
                South to build a small house near the homestead as an annex to be used on occasion. Such a house my
                father built after the Civil War, and when he married my mother they went to live in it. It was
                completely covered with vines, climbing roses and honeysuckles. From the garden it looked like an
                arbour. The little porch was hidden from view by a screen of yellow roses and Southern smilax. It was
                the favourite haunt of humming-birds and bees.
            </p>
        </div>
        <br></br>
        <div className={styles.about_para}>
            <p>
            
                I lived, up to the time of the illness that deprived me of my sight and hearing, in a tiny house
                consisting of a large square room and a small one, in which the servant slept. It is a custom in the
                South to build a small house near the homestead as an annex to be used on occasion. Such a house my
                father built after the Civil War, and when he married my mother they went to live in it. It was
                completely covered with vines, climbing roses and honeysuckles. From the garden it looked like an
                arbour. The little porch was hidden from view by a screen of yellow roses and Southern smilax. It was
                the favourite haunt of humming-birds and bees.
            </p>
        </div>
    </div>
    <Footer></Footer>
</>
)
}

export default about