import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';

function LandingPage() {
  return (
    <Box
      sx={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // bgcolor: '#84dcc6',
        paddingTop: { md: '6rem', xs: '5rem' }
        // background: 'linear-gradient(101.82deg, #E9C46A -1.91%, #F4A261 102.01%)'
      }}
      id="Home"
    >
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center' }}
        >
          <Grid item md={6} xs={12}>
            <Typography variant="h6" sx={{ color: '#666666' }}>
              ONE ENEMY, WHOLE WORLD IS FIGHTING WITH
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography
              variant="h1"
              sx={{
                background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              COVID-19
            </Typography>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Typography variant="h6" sx={{ color: '#666666' }}>
              The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019,
              the outbreak was later recognised as a pandemic by the WHO.
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container justifyContent="space-between" spacing={2}>
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
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
}

export default LandingPage;
