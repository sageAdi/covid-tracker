import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useScrollTrigger, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

function ChangeColorOnScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true
  });
  const theme = useTheme();
  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? theme.palette.primary.main : 'transparent'
    }
  });
}

const pages = ['Home', 'Updates', 'About', 'Symptoms', 'Prevention'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ChangeColorOnScroll>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                mr: 2,
                display: {
                  xs: 'none',
                  md: 'flex'
                }
              }}
            >
              Covid-19
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'flex',
                  md: 'none'
                }
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: 'block',
                    md: 'none'
                  },
                  '& div': {
                    width: '100%'
                  }
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      width: '100%'
                    }}
                  >
                    <Button
                      LinkComponent={Link}
                      href={`#${page}`}
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        display: 'block'
                      }}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'flex',
                  md: 'none'
                }
              }}
            >
              Covid-19
            </Typography>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex'
                }
              }}
            >
              {pages.map((page) => (
                <Button
                  LinkComponent={Link}
                  href={`#${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block'
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ChangeColorOnScroll>
  );
}

ChangeColorOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};

export default ResponsiveAppBar;
