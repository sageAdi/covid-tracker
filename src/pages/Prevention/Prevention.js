import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PrecautionCard from '../../components/PrecautionCard/PrecautionCard';
import hi from './image/Avoid Human Interaction.svg';
import sg from './image/Avoid Social Gatherings.svg';
import sd from './image/Maintain Social Distance.svg';

function Prevention() {
  const prevention = [
    'Avoid Human Interaction',
    'Avoid Social Gatherings',
    'Maintain Social Distance'
  ];
  const description = [
    'COVID-19 is thought to spread mainly through close contact from person-to-person in respiratory droplets.',
    'If an infected person coughs or sneezes, their infected droplets can infect many people nearby.',
    'Regular handwashing is one of the best ways to remove germs, avoid getting sick, and prevent the spread.'
  ];
  const icons = [hi, sg, sd];
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: '5rem',
        scrollMarginTop: '5rem'
      }}
      id="Prevention"
    >
      <Typography variant="h5" color="primary">
        Get Preventions
      </Typography>
      <Grid container>
        <Grid item md={4} xs={12}>
          <Typography variant="h6" gutterBottom>
            What are COVID-19 PREVENTIONS ?
          </Typography>
        </Grid>
        <Grid item container md xs={12} sx={{ borderRadius: 2 }}>
          {prevention.map((item, index) => (
            <Grid item md={4} sm={6} xs={12} p={1} key={item}>
              <PrecautionCard icon={icons[index]} title={item} body={description[index]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Prevention;
