import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import Paper from '@mui/material/Paper';

const OWNER_CONTACT = '9652739518';

const StyledSection = styled(Box)({
  padding: '4rem 0',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
});

const StyledPaper = styled(Paper)({
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

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#c3cfe2',
      borderRadius: '12px',
    },
    '&:hover fieldset': {
      borderColor: '#1a237e',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1a237e',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#1a237e',
    '&.Mui-focused': {
      color: '#1a237e',
    },
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with contact form details
    const whatsappMessage = `New Contact Form Inquiry\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}`;
    
    // Format phone number
    const phone = OWNER_CONTACT.replace(/\s+/g, '').replace('+', '');
    
    // Create WhatsApp Web link
    const whatsappLink = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp Web in new tab
    window.open(whatsappLink, '_blank');
    
    // Show success message
    alert('Please check your WhatsApp Web and copy the message.\nThank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <StyledPaper elevation={0}>
          <PageTitle variant="h2">
            Contact Us
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
            We'd love to hear from you! You can reach us through any of the following methods:
          </Typography>

          <Box sx={{ mb: 6 }}>
            <PageTitle variant="h5">
              Phone
            </PageTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon sx={{ mr: 2, color: '#1a237e' }} />
              <Typography sx={{ color: '#1a237e', fontSize: '1.1rem' }}>
                {OWNER_CONTACT}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StyledButton
                startIcon={<WhatsAppIcon />}
                onClick={() => window.open(`https://wa.me/${OWNER_CONTACT.replace(/\s+/g, '')}`, '_blank')}
                fullWidth
              >
                Contact on WhatsApp
              </StyledButton>
            </Box>
          </Box>

          <PageTitle variant="h4">
            Send a Message
          </PageTitle>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <StyledTextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <StyledTextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <StyledTextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <StyledTextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <StyledButton
                type="submit"
                startIcon={<WhatsAppIcon />}
                fullWidth
                sx={{ mt: 2 }}
              >
                Send Message
              </StyledButton>
            </Box>
          </form>
        </StyledPaper>
      </Container>
    </StyledSection>
  );
};

export default Contact;
