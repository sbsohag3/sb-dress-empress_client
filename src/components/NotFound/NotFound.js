import React from 'react';
import Notfound from '../../images/not-found.png'

const NotFound = () => {
  return (
    <div className='text-center mx-auto'>
      <img src={Notfound} alt="" />
    </div>
  );
};

export default NotFound;