import React from 'react';
import { Circles } from 'react-loader-spinner';

import './Loader.css';

const Loader = () => (
  <div className='loader-container'>
    <Circles
      height="80"
      width="80"
      color="#007bff"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
)

export default Loader;