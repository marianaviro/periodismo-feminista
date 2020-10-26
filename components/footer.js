import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.credits}>
        {router.pathname === '/creditos' ? (
          <div>
            <img src="/images/fuego.svg" alt="Ilustración de llamas de fuego" />
          </div>
        ) : (
          <Link href="/creditos">
            <a>
              <img
                src="/images/creditos.svg"
                className={styles.hovered}
                alt="Ver créditos"
              />
            </a>
          </Link>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <img
            src="/images/logo-small.svg"
            className="logo item"
            alt="Logo de Periodismo feminista"
          />
        </div>
        <div className={styles.footerItem}>
          <img
            src="/images/logo-uniandes.png"
            className="logo item"
            alt="Logo del Centro de Investigación y Creación de la Facultad de Artes y Humanidades de la Universidad de los Andes"
          />
        </div>
        <div className={`${styles.footerItem} relative`}>
          <p className={styles.thanks}>
            Este proyecto fue realizado por Johan Sebastián Romero Rodríguez
            como parte de su proyecto de grado de la maestría en Periodismo de
            la Universidad de los Andes. Diseño y desarrollo web por Mariana
            Villamizar Rodríguez.
          </p>
          <img
            className={styles.sparks}
            src="/images/sparks.svg"
            alt="Ilustración de destellos"
          />
        </div>
      </div>
      <div className={styles.cc}>
        <img
          src="/images/cc.svg"
          className="icon"
          alt="Logo de Creatve Commons CC-BY-SA"
        />
        <p>
          Todo el material en esta página, cuando no se indique lo contrario, es
          CC-BY-SA. Si reúsas o adaptas recursos de esta página por favor
          vincúlalos y referéncialos.
        </p>
      </div>
    </footer>
  );
}
