import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Loader from './components/Loader';

const LandingPage = lazy(() => import('./containers/LandingPage'));
const ProductDetails = lazy(() => import('./containers/ProductDetails'));
const ManagementView = lazy(() => import('./containers/ManagementView'));

const App = () => (
  <div>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beer/:id" element={<ProductDetails />} />
        <Route path="/management" element={<ManagementView />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
