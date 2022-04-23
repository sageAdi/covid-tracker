import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from '../../components/DashboardCard/Card';

function Dashboard({ data, isLoading }) {
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
          <DashboardCard title="Total Cases" body={data?.TotalCases} isLoading={isLoading} />
        </Grid>
        <Grid item>
          <DashboardCard title="New Cases" body={data?.NewCases} isLoading={isLoading} />
        </Grid>
        <Grid item>
          <DashboardCard
            title="Total Recovered"
            body={data?.TotalRecovered}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item>
          <DashboardCard title="ActiveCases" body={data?.ActiveCases} isLoading={isLoading} />
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
