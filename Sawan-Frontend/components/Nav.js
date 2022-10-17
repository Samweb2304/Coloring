import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/components/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPalette,faGraduationCap,faPuzzlePiece,faScissors,} from "@fortawesome/free-solid-svg-icons";
// import Image from 'next/image'
// import logo from '../public/images/logo.svg'


const Nav = () => {

const router = useRouter();

return (
<>
  <div className={styles.nav_section}>
    <div className={styles.container}>
      {/* Uncomment Below Line for Using Image as Logo */}
      {/*
      <Link href="./"><a>
        <Image className={styles.nav_logo} src={logo} alt="Picture of the author" />
      </a>
      </Link> */}

      <Link href="/" passHref>
      <h3 className={styles.text_logo}>ARTCOLOR</h3>
      </Link>

      <ul className={styles.list}>

        <Link href="/" passHref>
        <li className={styles.listItem}>
          <FontAwesomeIcon className={styles.nav_icon} icon={faPalette} />
          <a className={router.pathname=='/' ? 'active' : '' }>Coloring</a>
        </li>
        </Link>

        <Link href="/tutorials" passHref>
        <li className={styles.listItem}>
          <FontAwesomeIcon className={styles.nav_icon} icon={faGraduationCap} />
          <a className={router.pathname=='/tutorials' ? 'active' : '' }>Tutorials</a>
        </li>
        </Link>

        <Link href="/puzzle" passHref>
        <li className={styles.listItem}>
          <FontAwesomeIcon className={styles.nav_icon} icon={faPuzzlePiece} />
          <a className={router.pathname=='/puzzle' ? 'active' : '' }>Puzzle Games</a>
        </li>
        </Link>

        <Link href="/paper" passHref>
        <li className={styles.listItem}>
          <FontAwesomeIcon className={styles.nav_icon} icon={faScissors} />
          <a className={router.pathname=='/paper' ? 'active' : '' }>Paper Crafts</a>
        </li>
        </Link>


      </ul>

    </div>
  </div>
</>
)
}

export default Nav