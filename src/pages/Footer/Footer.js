import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  ListItemIcon,
  Button,
  IconButton,
  useTheme
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { Mail } from '@mui/icons-material';

function Footer() {
  const theme = useTheme();
  return (
    <Paper sx={{ marginTop: '5rem', bgcolor: '#222222', color: '#fff' }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="flex-start">
          <Grid item md xs={6} p={1}>
            <Typography variant="h6">Quick Links</Typography>
            <nav aria-label="Quick links">
              <List sx={{ display: { md: 'block', xs: 'none' } }}>
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
            <Grid container sx={{ display: { md: 'none', xs: 'flex' } }}>
              <Button>Home</Button>
              <Button>Updates</Button>
              <Button>About</Button>
              <Button>Symptoms</Button>
              <Button>Precautions</Button>
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xs={6}
            p={1}
            sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center' }}
            alignSelf="center"
          >
            <img src="./logo.png" alt="logo" />
          </Grid>
          <Grid item md p={1} xs={6}>
            <Typography variant="h6">Contact Us</Typography>
            <nav aria-label="Quick links">
              <List sx={{ display: { md: 'block', xs: 'none' } }}>
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
            <Grid container sx={{ display: { md: 'none', xs: 'flex' } }}>
              <IconButton>
                <CallIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
              <IconButton>
                <Mail sx={{ color: theme.palette.primary.main }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
              <IconButton>
                <GitHubIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
              <Grid item xs={12} sx={{ color: theme.palette.primary.main }}>
                <ListItemText primary="&#169; 2022 #sageAdi" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Footer;
