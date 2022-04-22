import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import PropTypes from 'prop-types';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

// const rounded = (num) => {
//   if (num > 1000000000) {
//     return `${Math.round(num / 100000000) / 10}Bn`;
//   }
//   if (num > 1000000) {
//     return `${Math.round(num / 100000) / 10}M`;
//   }
//   return `${Math.round(num / 100) / 10}K`;
// };

function MapChart({ setTooltipContent, data }) {
  return (
    <ComposableMap
      data-tip=""
      projectionConfig={{
        scale: 200
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME } = geo.properties;
                const covidStatus =
                  data.length > 0 && data.find((country) => country.Country === NAME);
                setTooltipContent(
                  <>
                    <p>
                      {NAME} {/* — {rounded(POP_EST)} */}
                    </p>
                    <p>TotalCases — {covidStatus?.TotalCases}</p>
                    <p>NewCases — {covidStatus?.NewCases}</p>
                    <p>TotalDeaths — {covidStatus?.TotalDeaths}</p>
                    <p>NewDeaths — {covidStatus?.NewDeaths}</p>
                    <p>TotalRecovered — {covidStatus?.TotalRecovered}</p>
                  </>
                );
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}
              style={{
                default: {
                  fill: '#D6D6DA',
                  outline: 'none'
                },
                hover: {
                  fill: '#F53',
                  outline: 'none'
                },
                pressed: {
                  fill: '#E42',
                  outline: 'none'
                }
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
MapChart.propTypes = {
  setTooltipContent: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      TotalCases: PropTypes.number,
      NewCases: PropTypes.number,
      TotalDeaths: PropTypes.number,
      NewDeaths: PropTypes.number,
      TotalRecovered: PropTypes.number,
      ActiveCases: PropTypes.number
    })
  ).isRequired
};

export default memo(MapChart);
