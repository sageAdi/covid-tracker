import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  ListItemIcon
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { Mail } from '@mui/icons-material';

function Footer() {
  return (
    <Paper sx={{ marginTop: '5rem', bgcolor: '#222222', color: '#fff' }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Quick Links</Typography>
            <nav aria-label="Quick links">
              <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Home">
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Updates">
                    <ListItemText primary="Updates" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#About">
                    <ListItemText primary="About" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Symptoms">
                    <ListItemText primary="Symptoms" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#Precautions">
                    <ListItemText primary="Precautions" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
          <Grid item xs sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="./logo.png" alt="logo" />
          </Grid>
          <Grid item>
            <Typography variant="h6">Contact Us</Typography>
            <nav aria-label="Quick links">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CallIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="+91 8840272023" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Mail sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="adityamaurya100@gmail.com" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LinkedInIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="linkedin.com/in/sageadi/" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GitHubIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="https://github.com/sageAdi" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="&#169; 2022 #sageAdi" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Footer;
