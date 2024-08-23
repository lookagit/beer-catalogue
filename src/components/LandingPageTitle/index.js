import React from 'react';

// style
import './LandingPageTitle.css';

const LandingPageTitle = ({ title }) => (
  <div className='title-container'>
    <h2>{ title }</h2>
  </div>
);

export default LandingPageTitle;