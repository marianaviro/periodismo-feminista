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
        <button className={styles.menuClose} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/></svg>
        </button>
      </div>
      <div className={styles.navbarLeft}>
        <Link href="/articulo">
          <a className={styles.navbarLink}>Artículo</a>
        </Link>
        <Link href="/#medios-en-conjunto">
          <a className={styles.navbarLink}>Medios en conjunto</a>
        </Link>
        <Link href="/#mapa-de-medios">
          <a className={styles.navbarLink}>Mapa</a>
        </Link>
        <Link href="/creditos">
          <a className={styles.navbarLink}>Créditos</a>
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
