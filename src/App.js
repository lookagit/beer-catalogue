import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import ProductDetails from './containers/ProductDetails';
import ManagementView from './containers/ManagementView';
import Navigation from './components/Navigation';

const App = () => (
  <div>
    <Navigation />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/beer/:id" element={<ProductDetails />} />
      <Route path="/management" element={<ManagementView />} />
    </Routes>
  </div>
);

export default App;
