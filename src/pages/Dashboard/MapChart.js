import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import PropTypes from 'prop-types';
import { scaleQuantile } from 'd3-scale';

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
  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.TotalCases))
    .range([
      '#ffedea',
      '#ffcec5',
      '#ffad9f',
      '#ff8a75',
      '#ff5533',
      '#e2492d',
      '#be3d26',
      '#9a311f',
      '#782618'
    ]);
  return (
    <ComposableMap
      data-tip=""
      projectionConfig={{
        scale: 200
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const { NAME } = geo.properties;
            let covidStatus = data.length > 0 && data.find((country) => country.Country === NAME);
            if (NAME === 'United States of America') {
              covidStatus = data.find((country) => country.Country === 'USA');
            }
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
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
                    fill: covidStatus ? colorScale(covidStatus?.TotalCases) : '#D6D6DA',
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
            );
          })
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
      TotalRecovered: PropTypes.string,
      ActiveCases: PropTypes.number
    })
  ).isRequired
};

export default memo(MapChart);
