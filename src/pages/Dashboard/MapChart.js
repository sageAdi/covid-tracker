import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import PropTypes from 'prop-types';
import { scaleQuantile } from 'd3-scale';
import feature from './feature.json';

// const geoUrl =
//   'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

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
    .domain(data?.map((d) => d?.cases?.total))
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
      <Geographies geography={feature}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const { name } = geo.properties;
            // console.log(name);
            // console.log(data.find((item) => item.country === 'USA'));
            let covidStatus = data.length > 0 && data.find((country) => country.country === name);
            // if (name === 'United States') {
            //   covidStatus = data.find((country) => country.country === 'USA');
            // }
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setTooltipContent(
                    <>
                      <p>
                        {name} {/* — {rounded(POP_EST)} */}
                      </p>
                      <p>TotalCases — {covidStatus?.cases?.total}</p>
                      <p>Active — {covidStatus?.cases?.active}</p>
                      <p>TotalDeaths — {covidStatus?.deaths?.total}</p>
                      <p>NewDeaths — {covidStatus?.deaths?.new}</p>
                      <p>TotalRecovered — {covidStatus?.cases?.recovered}</p>
                    </>
                  );
                }}
                onMouseLeave={() => {
                  setTooltipContent('');
                }}
                style={{
                  default: {
                    fill: covidStatus ? colorScale(covidStatus?.cases?.total) : '#D6D6DA',
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
