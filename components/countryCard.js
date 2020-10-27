import { useEffect, useState } from 'react';
import Link from 'next/link';
import db from '../db.json';

export default function CountryCard({ selectedCountry }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const orgs = db.filter(
      (record) => record.country_code === selectedCountry?.ISO_A3
    );
    setMedia(orgs);
  }, [selectedCountry]);

  return selectedCountry ? (
    <div className="p-4 bg-white shadow-md absolute top-0 right-0 w-64 h-64 overflow-y-auto">
      <h2 className="text-2xl font-bold">{selectedCountry.NAME}</h2>
      {!media.length ? (
        <p>No hay organizaciones</p>
      ) : (
        <ul className="space-y-3 mt-3">
          {media.map((m) => (
            <li key={m.id} className="pb-2 border-b leading-tight">
              <span>{m.media}</span>
              <Link href={`/perfil/${m.slug}`}>
                <a>Ver perfil</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
}
