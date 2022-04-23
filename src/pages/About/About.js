import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

function About() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: '5rem'
      }}
      id="About"
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item md={6} xs={12}>
          <Typography variant="h5" color="primary">
            About the Disease
          </Typography>
          <Typography variant="h4" gutterBottom>
            What is corona virus ?
          </Typography>
          <Typography gutterBottom>
            Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
          </Typography>
          <Typography gutterBottom>
            Most people who fall sick with COVID-19 will experience mild to moderate symptoms and
            recover without special treatment. However, some will become seriously ill and require
            medical attention.
          </Typography>
          <Typography>
            The best way to prevent and slow down transmission is to be well informed about the
            disease and how the virus spreads. Protect yourself and others from infection by staying
            at least 1 metre apart from others, wearing a properly fitted mask, and washing your
            hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and
            follow local guidance.
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          display="flex"
          sx={{
            justifyContent: { md: 'flex-end', xs: 'center' }
          }}
        >
          <Box
            component="img"
            src="./about_pic.png"
            alt="covid-logo"
            sx={{
              height: '220px'
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
