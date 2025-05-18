import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StyledHero = styled(Box)({
  minHeight: '80vh',
  maxWidth: '1400px',
  margin: '1rem auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#f8f9fa',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  '& video': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    zIndex: -1,
    transform: 'translateX(-50%) translateY(-50%)',
    objectFit: 'cover',
    borderRadius: '20px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(71, 59, 12, 0.7) 0%, rgba(51, 38, 3, 0.4) 100%)',
    zIndex: 0,
    borderRadius: '20px',
  },
});

const ProductCard = styled(motion(Box))({
  backgroundColor: 'transparent',
  borderRadius: '16px',
  padding: '1.5rem',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
});

const FloatingText = styled(motion(Typography))({
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
    margin: '15px auto',
    borderRadius: '2px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

const GlowingButton = styled(Button)({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  border: 0,
  borderRadius: '30px',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)',
  color: '#1a237e',
  height: 48,
  padding: '0 30px',
  transition: 'all 0.3s ease-in-out',
  fontWeight: 600,
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 10px 4px rgba(0, 0, 0, 0.15)',
    background: 'linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)',
  },
});

const products = [
  {
    id: 1,
    name: 'Dry Fruit Putharekulu',
    description: 'Traditional Andhra sweet made with dry fruits and rice flakes',
    price: 250,
    image: '/images/dry-fruit-puth.jpg',
    details: 'A rich and delicious variation of Putharekulu made with premium dry fruits. Perfect for gifting and special occasions.',
    contactNumber: '+91 8328657726'
  },
  {
    id: 2,
    name: 'Mango Jelly',
    description: 'Fresh mango jelly made with natural ingredients',
    price: 150,
    image: '/images/mango-jelly.jpg',
    details: 'A refreshing mango jelly made with fresh mango pulp and natural flavors. Ideal for summer.',
    contactNumber: '+91 8328657726'
  },
  {
    id: 3,
    name: 'Palmyra Jelly',
    description: 'Natural Palmyra palm jelly',
    price: 180,
    image: '/images/palmyra-jelly.jpg',
    details: 'A traditional Andhra delicacy made from Palmyra palm sap. Perfect for health-conscious sweet lovers.',
    contactNumber: '+91 8328657726'
  }
];

const Home = () => {
  return (
    <Box>
      <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 3 } }}>
        <StyledHero>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{
              filter: 'brightness(0.9) contrast(1.1)',
            }}
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
          <FloatingText
            variant="h1"
            component="h1"
            gutterBottom
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, }}
            sx={{ 
              fontWeight: 'bold', 
              fontSize: { xs: '1.5rem', md: '2.5rem' }, // Reduced size
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              color: '#f8f9fa',
              opacity: 1.0 // Reduced opacity
            }}
          >
            Welcome to Regional Bites
          </FloatingText>
          <FloatingText
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ 
              mb: 4, 
              opacity: 0.6, // Reduced opacity
              color: '#e9ecef',
              textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
              fontSize: { xs: '1rem', md: '1.5rem' } // Reduced size
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the authentic taste of traditional sweets
          </FloatingText>
          <FloatingText
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ 
              mb: 4, 
              opacity: 0.5, // Reduced opacity
              color: '#ffd700',
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              fontStyle: 'italic',
              fontSize: { xs: '0.9rem', md: '1.2rem' } // Reduced size
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "Taste the love in every bite - Just like homemade"
          </FloatingText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GlowingButton
              component={Link}
              to="/products"
              size="large"
            >
              Explore Our Sweets
            </GlowingButton>
          </motion.div>
          </motion.div>
        </Box>
      </StyledHero>
      </Box>

      <Box
        sx={{
          mt: 8,
          mb: 4,
          py: 8,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: '40px',
          mx: 2,
        }}
      >
        <FloatingText
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            fontWeight: 'bold',
            color: '#1a237e',
            mb: 4,
            '&::after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              background: '#ff6b6b',
              margin: '15px auto',
              borderRadius: '2px',
            },
          }}
        >
          Featured Products
        </FloatingText>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            mt: 4,
            px: { xs: 2, md: 4 },
            perspective: '1000px',
          }}
        >
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ width: '100%' }}
              >
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <ProductCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: product.id * 0.1 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7))',
                        borderRadius: '12px',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      p: 3,
                      transform: 'translateZ(20px)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: '#1a237e',
                        mb: 2,
                        opacity: 0.7,
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 2,
                        lineHeight: 1.6,
                        opacity: 0.6,
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ff6b6b',
                        fontWeight: 'bold',
                        mt: 2,
                        opacity: 0.7,
                      }}
                    >
                      ₹{product.price}
                    </Typography>
                  </Box>
                  <GlowingButton
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    View Details
                  </GlowingButton>
                  </ProductCard>
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
