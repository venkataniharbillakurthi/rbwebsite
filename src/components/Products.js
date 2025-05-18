import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProductCard from './ProductCard';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Gulab Jamun',
    description: 'Traditional Indian sweet made with milk solids',
    price: 150,
    image: '/images/gulab-jamun.jpg'
  },
  {
    id: 2,
    name: 'Rasgulla',
    description: 'Soft cheese balls soaked in sugar syrup',
    price: 120,
    image: '/images/rasgulla.jpg'
  },
  {
    id: 3,
    name: 'Ladoo',
    description: 'Traditional Indian sweet ball',
    price: 80,
    image: '/images/ladoo.jpg'
  },
  {
    id: 4,
    name: 'Jalebi',
    description: 'Deep-fried pretzel-shaped sweet',
    price: 100,
    image: '/images/jalebi.jpg'
  },
  {
    id: 5,
    name: 'Barfi',
    description: 'Dense milk-based sweet',
    price: 180,
    image: '/images/barfi.jpg'
  },
  {
    id: 6,
    name: 'Kheer',
    description: 'Traditional Indian rice pudding',
    price: 200,
    image: '/images/kheer.jpg'
  }
];

const StyledSection = styled(Box)({
  padding: '4rem 0',
});

const Products = () => {
  return (
    <Box>
      <StyledSection>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Our Sweet Collection
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Discover our authentic regional sweets
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSection>
    </Box>
  );
};

export default Products;
