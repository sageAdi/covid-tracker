import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function Bar({ title, isActive }) {
  const handleOnMouseOver = (event) => {
    console.log(event.target.name);
  };
  const handleOnMouseLeave = (event) => {
    console.log(event.target.name);
  };
  return (
    <Button
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50px 0px 0px 50px',
        cursor: 'pointer',
        margin: '8px 0px',
        backgroundColor: isActive ? '#fff' : 'rgba(255,255,255,0.5)'
      }}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      name={title}
      fullWidth
    >
      {title}
    </Button>
  );
}
Bar.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};
export default Bar;
