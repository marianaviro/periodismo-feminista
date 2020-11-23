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
          <div className={styles.fireLinks}>
            <img className={styles.fuego} src="/images/fuego.svg" alt="Ilustración de llamas de fuego" />
            <Link href="/data/datos-periodismo-feminista.xlsx">
              <a className={styles.data}>
                <img
                  src="/images/descarga-datos.svg"
                  className={styles.hovered}
                  alt="Descargar datos"
                />
              </a>
            </Link>
          </div>
        ) : (
          <div className={styles.links}>
            <Link href="/data/datos-periodismo-feminista.xlsx">
              <a className={styles.data}>
                <img
                  src="/images/descarga-datos.svg"
                  className={styles.hovered}
                  alt="Descargar datos"
                />
              </a>
            </Link>
            <Link href="/creditos">
              <a className={styles.creditsButton}>
                <img
                  src="/images/creditos.svg"
                  className={styles.hovered}
                  alt="Ver créditos"
                />
              </a>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.data}>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <Link href="/">
            <a>
              <img
                src="/images/logo-small.svg"
                className={styles.logoPF}
                alt="Logo de Periodismo feminista"
              />
            </a>
          </Link>
        </div>
        <div className={styles.footerItem}>
          <img
            src="/images/logo-uniandes.png"
            className={styles.logoUniandes}
            alt="Logo del Centro de Investigación y Creación de la Facultad de Artes y Humanidades de la Universidad de los Andes"
          />
        </div>
        <div className={styles.footerItem}>
          <p className={styles.thanks}>
            Este proyecto fue realizado por Johan Sebastián Romero Rodríguez
            en el contexto de la Maestría en Periodismo de la Universidad de
            los Andes. El diseño y desarrollo web es por Mariana Villamizar y
            la supervisión general por Sandra Sánchez López, Prof. Asociada
            del Centro de Estudios en Periodismo. El proyecto fue financiado,
            en su fase de producción, por el Centro de Investigación y
            Creación, CIC, de la Facultad de Artes y Humanidades de la
            Universidad de los Andes.
          </p>
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
