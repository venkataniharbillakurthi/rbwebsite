import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const OWNER_CONTACT = '+91 8328657726';

const StyledCard = styled(Card)({
  maxWidth: '350px',
  minWidth: '300px',
  width: '100%',
  height: '450px',
  overflow: 'hidden',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: '250px',
  width: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledContent = styled(CardContent)({
  flexGrow: 1,
  padding: '20px',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const PriceTag = styled(Typography)({
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  padding: '8px 16px',
  borderRadius: '20px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontWeight: 'bold',
  color: '#1a237e',
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

const ProductCard = ({ product }) => {

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <StyledCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ position: 'relative' }}>
          <StyledCardMedia
            component="img"
            image={product.image}
            alt={product.name}
          />
          <PriceTag variant="subtitle1">
            ₹{product.price}
          </PriceTag>
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            ₹{product.price}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <StyledButton 
              fullWidth
              sx={{ mt: 2 }}
            >
              View Details
            </StyledButton>
            
          </Box>
        </CardContent>
      </StyledCard>
    </Link>
  );
};

export default ProductCard;
