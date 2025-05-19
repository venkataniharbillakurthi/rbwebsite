import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import dryFruitImg from '../images/dry-fruit-puth.jpg';
import mangoJellyImg from '../images/mango-jelly.jpg';
import palmyraJellyImg from '../images/palmyra-jelly.jpg';

const StyledSection = styled(Box)({
  padding: '4rem 0',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
  position: 'relative',
});

const PageTitle = styled(motion(Typography))({
  marginBottom: '3rem',
  textAlign: 'center',
  color: '#1a237e',
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  position: 'relative',
  zIndex: 2,
  '&::after': {
    content: '""',
    display: 'block',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    margin: '20px auto',
    borderRadius: '2px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

const products = [
  {
    id: 1,
    name: 'Dry Fruit Putharekulu',
    description: 'Traditional Andhra sweet made with dry fruits and rice flakes',
    price: 250,
    image: dryFruitImg,
  },
  {
    id: 2,
    name: 'Mango Jelly',
    description: 'Fresh mango jelly made with natural ingredients',
    price: 150,
    image: mangoJellyImg
  },
  {
    id: 3,
    name: 'Palmyra Jelly',
    description: 'Natural Palmyra palm jelly',
    price: 180,
    image: palmyraJellyImg
  },
];

const Products = () => {
  return (
    <StyledSection>
      <Container maxWidth="lg">
        <PageTitle
          variant="h2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Products
        </PageTitle>
        <Typography
          variant="h5"
          component={motion.p}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            textAlign: 'center',
            color: '#1a237e',
            mb: 6,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Discover our authentic regional sweets, crafted with love and tradition
        </Typography>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Products;
