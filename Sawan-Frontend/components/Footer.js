import Image from 'next/image'
import styles from '../styles/components/Footer.module.css'
import facebook from '../public/images/facebook-f-brands.svg'
import instagram from '../public/images/instagram-brands.svg'
import linkedin from '../public/images/linkedin-in-brands.svg'
import twitter from '../public/images/twitter-brands.svg'
import youtube from '../public/images/youtube-brands.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faLocationDot,
    faPhone,
    faAt,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <>
            <div className={styles.footer_section}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_column}>
                        {/*
                <Image className={styles.footer_logo} src={logo} alt="Website Logo" width="150px" height="40px" /> */}
                        <h3 className={styles.text_logo}>ARTCOLOR</h3>
                        <p className={styles.company_intro}>The company holds an extensive portfolio of children’s books ranging
                            from Pre-School Reference Books,
                            Charts/Posters, and Text Books to name a few. We have also recently ventured into new categories
                            such as Dot to Dot books, Colouring books for adults and, Pop-up books for all age groups.</p>
                        <ul className={styles.social_icon}>
                            <li>
                                <a href='https://www.facebook.com/profile.php?id=100038148435896' target="_blank"
                                    rel="noreferrer">
                                    <Image className={styles.brand_logo} src={facebook} alt="Facebook" width="20px"
                                        height="20px" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/sawanbooks/' target="_blank" rel="noreferrer">
                                    <Image className={styles.brand_logo} src={instagram} alt="Instagram" width="20px"
                                        height="20px" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.youtube.com/channel/UC5zs6CaBbTdOdzOiKuwkdCw' target="_blank"
                                    rel="noreferrer">
                                    <Image className={styles.brand_logo} src={youtube} alt="Youtube" width="20px"
                                        height="20px" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com' target="_blank" rel="noreferrer">
                                    <Image className={styles.brand_logo} src={linkedin} alt="Linkedin" width="20px"
                                        height="20px" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.twitter.com' target="_blank" rel="noreferrer">
                                    <Image className={styles.brand_logo} src={twitter} alt="Twitter" width="20px"
                                        height="20px" />
                                </a>
                            </li>
                        </ul>
                        <p className={styles.footer_copyright}>Copyright © 2022 Sawan Books Publication</p>
                    </div>
                    <div className={styles.footer_column1}>
                        <div className={styles.footer_column}>
                            <ul className={styles.quick_links}>
                                <h3 className={styles.category_header}>Company</h3>
                                <li><a href='/' target="_blank" >Coloring</a></li>
                                <li><a href='/tutorials' target="_blank" rel="noreferrer">Tutorials</a></li>
                                <li><a href='/puzzle' target="_blank" rel="noreferrer">Puzzle Games</a></li>
                                <li><a href='/paper' target="_blank" rel="noreferrer">Paper Crafts</a></li>
                                <li><a href='/about' target="_blank" rel="noreferrer">About us</a></li>
                                <li><a href='/sitemap' target="_blank" rel="noreferrer">Sitemap</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className={styles.footer_column1}>
                        <div className={styles.footer_column}>
                            <h3 className={styles.contact_heading}>Contact</h3>
                            <p className={styles.address}>
                                <FontAwesomeIcon icon={faLocationDot}
                                    style={{ fontSize: 18, color: "#ffffff", padding: "0px 5px 0px 0px" }} />
                                761, Main Rd, Vijay Colony, Block B, Sant Nagar, Burari, Delhi – 110084.
                            </p>
                            <p className={styles.address}>
                                <FontAwesomeIcon icon={faPhone}
                                    style={{ fontSize: 18, color: "#ffffff", padding: "0px 5px 0px 0px" }} />
                                B2b Call: +91-9818773929</p>
                            <p className={styles.address}>
                                <FontAwesomeIcon icon={faPhone}
                                    style={{ fontSize: 18, color: "#ffffff", padding: "0px 5px 0px 0px" }} />
                                B2c Call: +91-9818773929
                            </p>
                            <p className={styles.address}>
                                <FontAwesomeIcon icon={faAt}
                                    style={{ fontSize: 18, color: "#ffffff", padding: "0px 5px 0px 0px" }} />
                                manojpublications02@gmail.com
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer