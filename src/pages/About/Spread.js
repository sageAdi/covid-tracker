import { Container, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import BlockIcon from '@mui/icons-material/Block';
import SpreadCard from '../../components/SpreadCard/SpreadCard';
// import co from './svgs/contaminated-objects.svg';
// import hc from './svgs/human-contact.svg';
// import sg from './svgs/social-gathering.svg';

function Spread() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: '2rem',
        background: theme.palette.primary.main,
        borderRadius: 2,
        padding: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h6" color="#fff" component="div">
        HOW DOES CORONA VIRUS SPREAD?
      </Typography>
      <Typography variant="h5">HOW IT SPREADS</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={4} xs={12}>
          <SpreadCard
            icon={CoronavirusIcon}
            title="Contanimted"
            body="It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes. This is not thought to be the main way the virus spreads."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <SpreadCard
            icon={BlockIcon}
            title="Human Contact"
            body="COVID-19 is thought to spread mainly through close contact from person-to-person in respiratory droplets from someone who is infected. People who are infected with coronavirus often have symptoms of illness."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <SpreadCard
            icon={SocialDistanceIcon}
            title="Social Gathering"
            body="If an infected person coughs or sneezes their droplets can infect people nearby. That’s why it’s important to avoid close contact with others. Understand that people may be infected and have only to no symptoms at all."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Spread;
