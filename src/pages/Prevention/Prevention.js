import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PrecautionCard from '../../components/PrecautionCard/PrecautionCard';
import hi from './image/Avoid Human Interaction.png';
import sg from './image/Avoid Social Gatherings.png';
import sd from './image/Maintain Social Distance.png';

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
        marginTop: '5rem'
      }}
      id="Prevention"
    >
      <Grid container>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" color="primary">
            Covid-19 preventions
          </Typography>
          <Typography variant="h4" gutterBottom>
            What are Covid-19 PREVENTIONS ?
          </Typography>
        </Grid>
        <Grid item container md={9} xs={12} sx={{ background: '#3d1bb6', borderRadius: 2 }} p={2}>
          {prevention.map((item, index) => (
            <Grid item md={4} xs={12} p={1} key={item}>
              <PrecautionCard icon={icons[index]} title={item} body={description[index]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Prevention;
