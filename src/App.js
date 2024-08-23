import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './containers/LandingPage';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </div>
);

export default App;




