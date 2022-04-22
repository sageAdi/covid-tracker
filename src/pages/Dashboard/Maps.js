import { Container } from '@mui/material';
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import MapChart from './MapChart';

function Maps({ data }) {
  const [content, setContent] = useState('');
  return (
    <Container
      maxWidth="xl"
      sx={{
        '& > svg': {
          width: '80%'
        },
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* <Box> */}
      <MapChart setTooltipContent={setContent} data={data} />
      <ReactTooltip>{content}</ReactTooltip>
      {/* </Box> */}
    </Container>
  );
}

Maps.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      TotalCases: PropTypes.number,
      NewCases: PropTypes.number
    })
  ).isRequired
};

export default Maps;
