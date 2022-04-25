import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Loader from '../Loader/Loader';

function DashboardCard({ title, body, isLoading, darkColor, mainColor, lightColor }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: lightColor
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
          <Typography variant="h5" component="div" color={darkColor}>
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
