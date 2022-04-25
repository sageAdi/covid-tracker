import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import fever from './images/fever.svg';
import cough from './images/cough.svg';
import headache from './images/headache.svg';
import soreThroath from './images/soreThroath.svg';
import sortnessOfBreath from './images/sortnessOfBreath.svg';
import SymptomCard from '../../components/SymptomCard/SymptomCard';

function Symptoms() {
  const symptoms = ['Cough', 'Fever', 'Headache', 'Sore Throath', 'Shortness of Breath '];
  const description = [
    'Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episod es in 24 hours (if you usually have a cough, it may be worse).',
    'High temperature – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is best to seek medical care early.',
    "A headache isn't a common symptom of the virus, but about 14% of people infected with corona have experienced it. It can be pretty intense in nature.",
    "A sore throat is one of the early, mild symptoms of coronavirus. If you suddenly develop a sore throat, it's best to self-isolate for 14 days as precaution.",
    'One of the symptoms of COVID-19 is shortness of breath. Shortness of breath is less common than fever and cough, but happens in about 30% of people.'
  ];
  const icons = [cough, fever, headache, soreThroath, sortnessOfBreath];
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: '5rem'
      }}
      id="Symptoms"
    >
      <Typography variant="h5" color="primary">
        Know your symptoms
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        // alignItems="center"
        // sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Grid item md={4} xs={12}>
          <Typography variant="h6" gutterBottom>
            What are COVID-19 SYMPTOMS ?
          </Typography>
        </Grid>
        <Grid item md xs={12} container>
          {symptoms.map((item, index) => (
            <Grid item md={4} sm={6} xs={12} p={1} key={item}>
              <SymptomCard icon={icons[index]} title={item} body={description[index]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Symptoms;
