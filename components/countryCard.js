import { useEffect, useState } from 'react';
import Link from 'next/link';
import db from '../db.json';
import nombres from '../nombres.json';
import styles from '../styles/home.module.css';

export default function CountryCard({ selectedCountry }) {

  function returnNombre(iso) {
    const nombre = nombres.find(e => e.country_code === iso);
    return nombre.country;
  }

  const [media, setMedia] = useState([]);

  useEffect(() => {
    const orgs = db.filter(
      (record) => record.country_code === selectedCountry?.ISO_A3
    );
    setMedia(orgs);
  }, [selectedCountry]);

  return selectedCountry ? (
    <div className={styles.countryCard}>
      <h2 className={styles.countryTitle}>{returnNombre(selectedCountry.ISO_A3)}</h2>
      {!media.length ? (
        <div className={styles.mediaNotFound}>
          <p>No hemos identificado medios feministas en este país. ¿Conoces alguno?</p>
          <a className={styles.mediaLink} href="mailto:js.romero11@uniandes.edu.co">Escríbenos</a>
        </div>
      ) : (
        <div>
          <ul className={styles.countryMedia}>
            {media.map((m) => (
              <li key={m.id} className={styles.media}>
                <span className={styles.mediaName}>{m.media}<span className={styles.sparks}></span></span>
                <Link href={`/perfil/${m.slug}`}>
                  <a className={styles.mediaLink}>Ver perfil</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.otherMedia}>
            <img className={styles.separator} src="/images/rayo.svg"/>
            <p>¿Conoces otros medios <br></br> feministas en este país?</p>
            <a className={styles.mediaLink} href="mailto:js.romero11@uniandes.edu.co">Escríbenos</a>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
