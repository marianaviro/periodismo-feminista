import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useEffect, useState } from 'react';
import styles from '../styles/home.module.css';
import db from '../db.json';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function Map({ onCountrySelected, selectedCountry }) {

  const [countriesISO, setCountriesISO] = useState();

  useEffect(() => {
    const iso = Array.from(new Set(db.map((record) => record.country_code)));
    setCountriesISO(iso);
  }, []);

  return (
    <div className={styles.mapa}>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [58, 20, 0],
          scale: 300,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.REGION_UN === 'Americas')
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#1e1e1e"
                  onClick={() => onCountrySelected(geo.properties)}
                  style={{
                    default: {
                      fill:
                        selectedCountry?.ISO_A3 === geo.properties.ISO_A3
                        ? (countriesISO.includes(geo.properties.ISO_A3)
                        ? '#ff4adc'
                        : '#a0a0a0')
                        : (countriesISO.includes(geo.properties.ISO_A3)
                        ? 'transparent'
                        : '#e2e2e2'),
                      outline: 'none',
                    },
                    hover: {
                      fill: countriesISO.includes(geo.properties.ISO_A3) ? '#ff4adc' : '#a0a0a0',
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#ff4adc',
                      outline: 'none',
                    },
                  }}
                />
              ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default Map;
