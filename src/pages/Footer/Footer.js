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
  Link,
  Alert,
  Snackbar,
  useTheme
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useState } from 'react';
import { Mail } from '@mui/icons-material';
import PropTypes from 'prop-types';

function CustomListItem({ children }) {
  const theme = useTheme();
  return (
    <ListItem
      disablePadding
      sx={{
        '&:hover': { backgroundColor: theme.palette.primary.light },
        borderRadius: 2
      }}
    >
      {children}
    </ListItem>
  );
}
CustomListItem.propTypes = {
  children: PropTypes.element.isRequired
};

function Footer() {
  const pages = ['Home', 'Updates', 'About', 'Symptoms', 'Prevention'];
  const [openScackBar, setOpenScakBar] = useState(false);
  const handleCloseShackBar = () => {
    setOpenScakBar(false);
  };
  const copyToClipBoard = () => {
    setOpenScakBar(true);
    navigator.clipboard.writeText('+918840272023');
  };

  return (
    <Paper sx={{ marginTop: '5rem', bgcolor: '#222222', color: '#fff' }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="flex-start">
          <Grid item md="auto" xs={12} p={1}>
            <Typography variant="h6">Quick Links</Typography>
            <nav aria-label="Quick links">
              <List sx={{ display: { md: 'block', xs: 'none' } }}>
                {pages.map((page) => (
                  <CustomListItem key={page}>
                    <ListItemButton component="a" href="#&{page}">
                      <ListItemText primary={page} />
                    </ListItemButton>
                  </CustomListItem>
                ))}
              </List>
            </nav>
            <Grid container sx={{ display: { md: 'none', xs: 'flex' }, color: '#fff' }}>
              {pages.map((page) => (
                <Button
                  LinkComponent={Link}
                  href={`#${page}`}
                  key={page}
                  sx={{
                    display: 'block'
                  }}
                  color="inherit"
                >
                  {page}
                </Button>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            md
            xs={6}
            p={1}
            sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center', flexGrow: 1 }}
            alignSelf="center"
          >
            <img src="./logo.png" alt="logo" />
          </Grid>
          <Grid item md="auto" p={1} xs={6}>
            <Typography variant="h6">Contact Us</Typography>
            <nav aria-label="Quick links">
              <List sx={{ display: { md: 'block', xs: 'none' } }}>
                <CustomListItem disablePadding>
                  <ListItemButton component="a" href="tel:+918840272023" onClick={copyToClipBoard}>
                    <ListItemIcon>
                      <CallIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="+91 8840272023" />
                  </ListItemButton>
                </CustomListItem>
                <CustomListItem disablePadding>
                  <ListItemButton component="a" href="mailto:adityamaurya100@gmail.com">
                    <ListItemIcon>
                      <Mail sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="adityamaurya100@gmail.com" />
                  </ListItemButton>
                </CustomListItem>
                <CustomListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="https://www.linkedin.com/in/sageadi/"
                    target="_blank"
                  >
                    <ListItemIcon>
                      <LinkedInIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="linkedin.com/in/sageadi/" />
                  </ListItemButton>
                </CustomListItem>
                <CustomListItem disablePadding>
                  <ListItemButton component="a" href="https://github.com/sageAdi" target="_blank">
                    <ListItemIcon>
                      <GitHubIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="github.com/sageAdi" />
                  </ListItemButton>
                </CustomListItem>
                <CustomListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="&#169; 2022 #sageAdi" />
                  </ListItemButton>
                </CustomListItem>
              </List>
            </nav>
            <Grid container sx={{ display: { md: 'none', xs: 'flex' } }}>
              <IconButton>
                <CallIcon sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton>
                <Mail sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton>
                <GitHubIcon sx={{ color: '#fff' }} />
              </IconButton>
              <Grid item xs={12} sx={{ color: '#fff' }}>
                <ListItemText primary="&#169; 2022 #sageAdi" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar open={openScackBar} autoHideDuration={2000} onClose={handleCloseShackBar}>
          <Alert onClose={handleCloseShackBar} severity="success" sx={{ width: '100%' }}>
            Phone number copied to clipboard!
          </Alert>
        </Snackbar>
      </Container>
    </Paper>
  );
}

export default Footer;
