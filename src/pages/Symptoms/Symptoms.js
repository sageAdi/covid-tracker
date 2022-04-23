import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import AirIcon from '@mui/icons-material/Air';
import fever from './images/fever.png';
import cough from './images/cough.png';
import headache from './images/headache.png';
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
  const icons = [cough, fever, headache, SevereColdIcon, AirIcon];
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: '5rem'
      }}
      id="Symptoms"
    >
      <Grid container spacing={1} justifyContent="space-between" alignItems="center">
        <Grid
          item
          md={9}
          xs={12}
          container
          spacing={2}
          sx={{ bgcolor: '#23ae41', borderRadius: 2 }}
          p={2}
        >
          {symptoms.map((item, index) => (
            <Grid item xs>
              <SymptomCard icon={icons[index]} title={item} body={description[index]} />
            </Grid>
          ))}
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" color="primary">
            Know your symptoms
          </Typography>
          <Typography variant="h4" gutterBottom>
            What are covid-19 symptoms ?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Symptoms;
