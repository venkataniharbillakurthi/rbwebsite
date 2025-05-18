import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { motion, AnimatePresence } from 'framer-motion';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  background: '#ffffff',
  boxShadow: 'none',
  borderBottom: '1px solid #eee',
  position: 'sticky',
  top: 0,
  zIndex: 1200,
  minHeight: 'auto',
});

const Logo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textDecoration: 'none',
  color: '#1a237e',
  padding: '12px 0',
  '&:hover': {
    opacity: 0.9,
  },
});

const NavButton = styled(Button)({
  background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: '30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  padding: '8px 24px',
  margin: '0 4px',
  transition: 'all 0.3s ease-in-out',
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 10px 4px rgba(255, 105, 135, .4)',
  }
});

const MobileMenu = styled(motion.div)({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  zIndex: 1100,
  boxShadow: 'none',
  borderTop: '1px solid #eee',
  overflow: 'hidden',
  '& .MuiButton-root': {
    color: '#333',
    fontSize: '1rem',
    padding: '1rem 1.5rem',
    width: '100%',
    justifyContent: 'flex-start',
    borderRadius: 0,
    borderBottom: '1px solid #eee',
    position: 'relative',
    textTransform: 'none',
    '&::after': {
      content: '""',
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)',
      width: '8px',
      height: '8px',
      borderRight: '2px solid #999',
      borderBottom: '2px solid #999',
    },
    '&:hover': {
      background: '#f5f5f5',
    },
    '&.active': {
      color: '#1a237e',
      fontWeight: 600,
      '&::after': {
        borderColor: '#1a237e',
      },
    },
  },
});

const MenuToggle = styled(IconButton)({
  color: '#333',
  padding: '8px',
  marginLeft: '8px',
  '&:hover': {
    background: '#f5f5f5',
  },
});

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      // Removed scrolled state variable
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledAppBar
        sx={{
          transition: 'all 0.3s ease-in-out',
          py: 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Logo component={Link} to="/">
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                mr: 1,
                fontFamily: 'serif',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1a237e',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                RB
              </Box>
              <Typography variant="h6" sx={{ 
                color: '#333', 
                fontWeight: 500,
                display: { xs: 'none', sm: 'block' },
                fontFamily: 'system-ui',
              }}>
                Regional Bites
              </Typography>
            </Logo>

            {!isMobile ? (
              <Box
                component={motion.div}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <NavButton
                      component={Link}
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      sx={{
                        borderBottom: location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                          ? '2px solid #ff6b6b' 
                          : 'none',
                      }}
                    >
                      {item}
                    </NavButton>
                  </motion.div>
                ))}
              </Box>
            ) : (
              <MenuToggle
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </MenuToggle>
            )}

            <AnimatePresence>
              {isMobile && mobileMenuOpen && (
                <MobileMenu
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >



                  {['Home', 'Products', 'About', 'Contact'].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <NavButton
                        component={Link}
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}
                      >
                        {item}
                      </NavButton>
                    </motion.div>
                  ))}
                </MobileMenu>
              )}
            </AnimatePresence>
          </Toolbar>
        </Container>
      </StyledAppBar>
      {/* <Toolbar />  Spacer for fixed navbar */}
    </motion.div>
  );
};

export default Navbar;
