import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';

const OWNER_CONTACT = '+91 8328657726';

const StyledSection = styled(Box)({
  padding: '4rem 0',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
});

const StyledPaper = styled(Box)({
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  background: 'rgba(255, 255, 255, 0.95)',
  transition: 'all 0.3s ease-in-out',
});

const PageTitle = styled(Typography)({
  marginBottom: '2rem',
  color: '#1a237e',
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    margin: '15px 0',
    borderRadius: '2px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

const StyledButton = styled(Button)({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  color: '#1a237e',
  fontWeight: 600,
  borderRadius: '30px',
  padding: '8px 24px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    background: 'linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)',
  },
});

const FeatureList = styled(Box)({
  '& li': {
    color: '#1a237e',
    fontSize: '1.1rem',
    lineHeight: 2,
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '""',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      marginRight: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  },
});

const About = () => {
  return (
    <StyledSection>
      <Container maxWidth="lg">
        <StyledPaper>
          <PageTitle variant="h2">
            About Regional Bites
          </PageTitle>
          
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              color: '#1a237e',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 4
            }}
          >
            Regional Bites is a premium sweet shop specializing in traditional Andhra sweets. We take pride in preserving and presenting the rich culinary heritage of our region through our authentic sweets.
          </Typography>

          <PageTitle variant="h4">
            Our Heritage
          </PageTitle>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              color: '#1a237e',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 4
            }}
          >
            Our journey began with a passion for preserving traditional recipes passed down through generations. We use only the finest ingredients and traditional methods to create sweets that evoke nostalgia and bring joy to our customers.
          </Typography>

          <PageTitle variant="h4">
            Our Promise
          </PageTitle>
          <FeatureList component="ul" sx={{ mb: 6, pl: 0, listStyle: 'none' }}>
            <li>Authentic recipes using traditional methods</li>
            <li>Premium ingredients sourced locally</li>
            <li>Handcrafted with love and care</li>
            <li>No artificial preservatives</li>
            <li>Perfect balance of sweetness and tradition</li>
          </FeatureList>

          <PageTitle variant="h4">
            Contact Us
          </PageTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ mr: 2, color: '#1a237e' }} />
              <Typography sx={{ color: '#1a237e', fontSize: '1.1rem' }}>
                {OWNER_CONTACT}
              </Typography>
            </Box>
            <Box>
              <StyledButton
                startIcon={<WhatsAppIcon />}
                onClick={() => window.open(`https://wa.me/${OWNER_CONTACT.replace(/\s+/g, '')}`, '_blank')}
                fullWidth
              >
                Contact on WhatsApp
              </StyledButton>
            </Box>
          </Box>
        </StyledPaper>
      </Container>
    </StyledSection>
  );
};

export default About;
