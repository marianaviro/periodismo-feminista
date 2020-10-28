import { useEffect, useState } from 'react';
import Link from 'next/link';
import db from '../db.json';
import styles from '../styles/home.module.css';

export default function CountryCard({ selectedCountry }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const orgs = db.filter(
      (record) => record.country_code === selectedCountry?.ISO_A3
    );
    setMedia(orgs);
  }, [selectedCountry]);

  return selectedCountry ? (
    <div className={styles.countryCard}>
      <h2 className={styles.countryTitle}>{selectedCountry.NAME}</h2>
      {!media.length ? (
        <p>No hemos identificado organizaciones en este país. ¿Conoces alguna? <a href="mailto:js.romero11@uniandes.edu.co">¡Escríbenos!</a></p>
      ) : (
        <ul className={styles.countryMedia}>
          {media.map((m) => (
            <li key={m.id} className={styles.media}>
              <span className={styles.mediaName}>{m.media}</span>
              <Link className={styles.mediaLink} href={`/perfil/${m.slug}`}>
                <a>Ver perfil</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
}
