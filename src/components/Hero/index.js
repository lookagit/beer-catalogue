import React from 'react';

// style
import './Hero.css';

const Hero = ({ title, subtitle }) => (
  <div className="hero">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

export default Hero;