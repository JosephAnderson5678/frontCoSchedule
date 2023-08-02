import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {
    Link as RRLink, // the RRLink is because material UI also uses link this clears up any confusion.
     } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="home"
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > 
            {/* MOBILE MENU*/ }
          
            <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/getallreviews/">
                    <Typography textAlign="center">All Reviews</Typography>
                </MenuItem>
                
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchreviewbyauthor/">
                    <Typography textAlign="center">Search Review By Author</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchreviewbytitle/">
                    <Typography textAlign="center">Search Review By Title</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchauthorNYT/">
                    <Typography textAlign="center">Search NYT By Author</Typography>
                </MenuItem>
               
                   
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchtitleNYT/">
                    <Typography textAlign="center">Search NYT By Title</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home 
            {/* End of Mobile Menu*/ }
          </Typography>
                      {/* BIG NON MOBILE MENU*/ }

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>  
        
          <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/getallreviews/">
                    <Typography textAlign="center">All Reviews</Typography>
                </MenuItem>
                
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchreviewbyauthor/">
                    <Typography textAlign="center">Search Review By Author</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchreviewbytitle/">
                    <Typography textAlign="center">Search Review By Title</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchauthorNYT/">
                    <Typography textAlign="center">Search NYT By Author</Typography>
                </MenuItem>
               
                   
                <MenuItem onClick={handleCloseNavMenu}  component={RRLink}   to="/searchtitleNYT/">
                    <Typography textAlign="center">Search NYT By Title</Typography>
                </MenuItem>

          
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;