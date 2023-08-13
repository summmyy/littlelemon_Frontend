import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Nav from './nav';
import Home from './homepage';
import About from './about';
import Menu from './menu';
import Booking from './booking';
import Location from './location';
import BookingConfirmation from './bookingConfrimation'

// Note: The server is running on port 8001, so dont forget to specify when running theh server on the backend

function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/booking/confirmation" element={<BookingConfirmation />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
