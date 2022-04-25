import { Container, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from '../../components/DashboardCard/Card';

function Dashboard({ data, isLoading }) {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: '5rem'
      }}
      id="Updates"
    >
      <Typography variant="h5" gutterBottom color="primary">
        Worldwide Update
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <DashboardCard
            title="Total Cases"
            body={data?.TotalCases}
            isLoading={isLoading}
            mainColor={theme.palette.red.main}
            darkColor={theme.palette.red.dark}
            lightColor={theme.palette.red.light}
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="New Cases"
            body={data?.NewCases}
            isLoading={isLoading}
            mainColor={theme.palette.neutral.main}
            darkColor={theme.palette.neutral.dark}
            lightColor={theme.palette.neutral.light}
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Total Recovered"
            body={data?.TotalRecovered}
            isLoading={isLoading}
            mainColor={theme.palette.green.main}
            darkColor={theme.palette.green.dark}
            lightColor={theme.palette.green.light}
          />
        </Grid>
        <Grid item>
          <DashboardCard
            title="ActiveCases"
            body={data?.ActiveCases}
            isLoading={isLoading}
            mainColor={theme.palette.blue.main}
            darkColor={theme.palette.blue.dark}
            lightColor={theme.palette.blue.light}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

Dashboard.defaultProps = {
  data: []
};
Dashboard.propTypes = {
  data: PropTypes.shape({
    TotalCases: PropTypes.number,
    NewCases: PropTypes.number,
    TotalDeaths: PropTypes.number,
    NewDeaths: PropTypes.number,
    TotalRecovered: PropTypes.string,
    ActiveCases: PropTypes.number
  }),
  isLoading: PropTypes.bool.isRequired
};

export default Dashboard;
