import { Button, Container, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';

function LandingPage() {
  return (
    <Paper
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        // background: 'linear-gradient(101.82deg, #E9C46A -1.91%, #F4A261 102.01%)'
      }}
      id="Home"
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              color: '#000'
            }}
            container
          >
            <Grid item xs={12} sx={{ display: { md: 'block', xs: 'none' } }}>
              <Typography variant="h5">ONE ENEMY, WHOLE WORLD IS FIGHTING WITH</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: { md: 'block', xs: 'none' } }}>
              <Typography variant="h1">COVID-19</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ display: { md: 'block', xs: 'none' } }}>
                The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December
                2019, the outbreak was later recognised as a pandemic by the WHO.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: { md: 'block', xs: 'none' } }}>
              <Button variant="contained" color="secondary" LinkComponent="a" href="#Updates">
                Track Covid-19
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            display="flex"
            sx={{
              justifyContent: { md: 'flex-end', xs: 'center' },
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src="./covid_logo.png"
              alt="covid-logo"
              sx={{
                height: '100%',
                filter: { md: 'none', xs: 'blur(4px)' }
              }}
            />
            <Grid
              sx={{
                position: 'absolute',
                width: { sm: '60%', xs: '100%' },
                textAlign: 'center',
                color: '#fff',
                display: { md: 'none', xs: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.2)'
              }}
              container
              borderRadius={2}
            >
              <Grid item xs={12}>
                <Typography variant="h5">ONE ENEMY, WHOLE WORLD IS FIGHTING WITH</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1">COVID-19</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December
                  2019, the outbreak was later recognised as a pandemic by the WHO.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="secondary" href="#Updates">
                  Track Covid-19
                </Button>
              </Grid>
            </Grid>
            {/* <img
              src="./covid_logo.png"
              alt="covid-logo"
              style={{
                height: '100%'
              }}
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default LandingPage;
