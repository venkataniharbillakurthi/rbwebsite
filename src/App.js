import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const App = () => {
  return (
    <Router>
      <StyledContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
};

export default App;
