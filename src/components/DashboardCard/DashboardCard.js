import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Loader from '../Loader/Loader';

function DashboardCard({ title, body, isLoading, darkColor, mainColor, lightColor }) {
  return (
    <Card
      sx={{
        backgroundColor: lightColor,
        boxShadow: `0 8px 16px 0 ${lightColor}`,
        backdropFilter: 'blur(2px)',
        borderRadius: '10px',
        border: `1px solid ${lightColor}`,
        height: '100%'
      }}
      elevation={2}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 14
          }}
          color={mainColor}
          gutterBottom
        >
          {title}
        </Typography>
        {isLoading ? (
          <Loader />
        ) : (
          <Typography sx={{ fontSize: '1rem', fontWeight: 500 }} color={darkColor}>
            <CountUp end={body} duration={1} separator="," />
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

DashboardCard.defaultProps = {
  body: 0
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLoading: PropTypes.bool.isRequired,
  darkColor: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  lightColor: PropTypes.string.isRequired
};

export default DashboardCard;
