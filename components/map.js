import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function Map({ onCountrySelected, selectedCountry }) {
  return (
    <div>
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
                        selectedCountry?.ISO_A2 === geo.properties.ISO_A2
                          ? '#ff4adc'
                          : 'transparent',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#ff4adc',
                      outline: 'none',
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
