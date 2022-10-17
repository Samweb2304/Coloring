import Link from 'next/link'
import Image from 'next/image'
import one from '../public/cheshire.svg'
import styles from '../styles/components/Categorycard.module.css'

const Card = () => {

// Card Stored in a Const Variable Below
const card = <div className={styles.card}>
   <div className={styles.card_section}>
      <Image src={one} className={styles.card_image} alt="card Image" width="250" height="200" />
      <div className={styles.image_info}>
         <h2 className={styles.image_header}>Badger</h2>
         <div className={styles.button_card}>
            <Link href='/artboard'>
            <a target='_blank'>
               <button className={styles.image_color}>Color Online</button>
            </a>
            </Link>
            <a href='/cheshire.svg' download='Sawan'>
               <button className={styles.image_print}>Download</button>
            </a>
         </div>
      </div>
   </div>
</div>

return (
<>
   <div className={styles.category_container}>
      <h1 className={styles.category_header}>Explore Pages</h1>
      <div className={styles.line}></div>
      <div className={styles.card_container}>
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
         {card}
      </div>
   </div>
</>
)
}

export default Card