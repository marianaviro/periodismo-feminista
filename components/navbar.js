import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.navbar} ${open ? styles.isOpen : ''}`.trim()}>
      <div className={styles.navbarRight}>
        <Link href="/">
          <a>
            <img
              className={styles.navbarLogo}
              src="/images/logo.svg"
              alt="Periodismo feminista de América Latina"
            />
          </a>
        </Link>
        <button className={styles.navbarBurger} id="hamburger" onClick={toggleMenu}>
          <img
            id="hamburger-icon"
            src="/images/hamburger.svg"
            alt="Ícono de menú desplegable"
          />
        </button>
      </div>
      <div className={styles.navbarLeft}>
        <Link href="/">
          <a className={styles.navbarLink}>Perfiles</a>
        </Link>
        <Link href="/">
          <a className={styles.navbarLink}>Mapa</a>
        </Link>
        <Link href="/">
          <a className={styles.navbarLink}>Artículos</a>
        </Link>
        <div className={styles.navbarSocial}>
          <a href="https://www.twitter.com" alt="Compartir en Twitter" target="_blank">
            <img src="/images/twitter.svg" alt="Twitter logo" />
          </a>
          <a href="https://www.facebook.com" alt="Compartir en Facebook" target="_blank">
            <img src="/images/facebook.svg" alt="Facebook icon" />
          </a>
          <a href="https://www.instagram.com" alt="Compartir en Instagram" target="_blank">
            <img src="/images/instagram.svg" alt="Instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
