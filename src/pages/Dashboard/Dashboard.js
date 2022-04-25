import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from '../../components/DashboardCard/DashboardCard';

function Dashboard({ data, isLoading }) {
  const theme = useTheme();
  return (
    <Box
      sx={
        {
          // backgroundColor: '#bdbdbd'
        }
      }
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: '5rem'
          // bgColor: '#4b4e6d'
        }}
        id="Updates"
      >
        <Typography variant="h5" gutterBottom color="primary">
          Worldwide Update
        </Typography>
        <Grid container justifyContent="center">
          <Grid item p={1} md={3} xs={6}>
            <DashboardCard
              title="Total Cases"
              body={data?.TotalCases}
              isLoading={isLoading}
              mainColor={theme.palette.red.main}
              darkColor={theme.palette.red.dark}
              lightColor={theme.palette.red.light}
            />
          </Grid>
          <Grid item p={1} md={3} xs={6}>
            <DashboardCard
              title="New Cases"
              body={data?.NewCases}
              isLoading={isLoading}
              mainColor={theme.palette.neutral.main}
              darkColor={theme.palette.neutral.dark}
              lightColor={theme.palette.neutral.light}
            />
          </Grid>
          <Grid item p={1} md={3} xs={6}>
            <DashboardCard
              title="Total Recovered"
              body={data?.TotalRecovered}
              isLoading={isLoading}
              mainColor={theme.palette.green.main}
              darkColor={theme.palette.green.dark}
              lightColor={theme.palette.green.light}
            />
          </Grid>
          <Grid item p={1} md={3} xs={6}>
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
    </Box>
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
