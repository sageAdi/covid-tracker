import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function LandingPage() {
  return (
    <Paper
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(101.82deg, #f7b733 -1.91%, #fc4a1a 102.01%)'
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              color: '#fff'
            }}
            container
          >
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: '700'
                }}
              >
                ONE ENEMY, WHOLE WORLD IS FIGHTING WITH
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontWeight: '700'
                }}
              >
                COVID-19
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December
                2019, the outbreak was later recognised as a pandemic by the WHO.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Track Covid-19
              </Button>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} display="flex" justifyContent="flex-end">
            <img
              src="./covid_logo.png"
              alt="covid-logo"
              style={{
                width: '400px',
                height: '400px'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default LandingPage;
