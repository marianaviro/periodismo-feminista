import { useEffect, useState } from 'react';
import db from '../db.json';

export default function CountryCard({ selectedCountry }) {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    const orgs = db.filter(
      (record) => record.country_code === selectedCountry?.ISO_A3
    );
    setOrgs(orgs);
  }, [selectedCountry]);

  return selectedCountry ? (
    <div className="p-4 bg-white shadow-md absolute top-0 right-0 w-64 h-64 overflow-y-auto">
      <h2 className="text-2xl font-bold">{selectedCountry.NAME}</h2>
      {!orgs.length ? (
        <p>No hay organizaciones</p>
      ) : (
        <ul className="space-y-3 mt-3">
          {orgs.map((org) => (
            <li key={org.id} className="pb-2 border-b leading-tight">
              {org.media}
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
}
