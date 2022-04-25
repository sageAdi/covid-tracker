import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Spread from './Spread';

function About() {
  // const [isSpredVisible, setIsSpreadVisible] = useState(false);
  // const handleClick = () => {
  //   setIsSpreadVisible(!isSpredVisible);
  // };
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: '5rem'
      }}
      id="About"
    >
      <Typography variant="h4" color="primary">
        About the Disease
      </Typography>
      <Grid container justifyContent="space-between">
        <Grid item md={4}>
          <Typography variant="h5" gutterBottom>
            What is CORONA VIRUS ?
          </Typography>
        </Grid>
        <Grid item md xs={12}>
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
        <Grid item xs={12}>
          <Spread />
        </Grid>
        {/* <Grid
          item
          md={8}
          xs={12}
          display="flex"
          sx={{
            justifyContent: { xs: 'center' }
          }}
        >
          <Box
            component="img"
            src="./about_pic.png"
            alt="covid-logo"
            sx={{
              width: { md: '50%', xs: '100%' },
              borderRadius: 2
            }}
          />
        </Grid> */}
      </Grid>
      {/* {isSpredVisible && <Spread />}
      <Button variant="contained" color="secondary" onClick={handleClick} sx={{ marginTop: 1 }}>
        {isSpredVisible ? 'Hide' : 'See More'}
      </Button> */}
    </Container>
  );
}

export default About;
