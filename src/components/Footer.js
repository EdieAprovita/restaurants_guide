import React from 'react';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <h4>Hola</h4>
            <ul className='list-unstyled'>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-6'>
            <h4>Hola</h4>
            <ul className='list-unstyled'>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-6'>
            <h4>Hola</h4>
            <ul className='list-unstyled'>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-6'>
            <h4>Hola</h4>
            <ul className='list-unstyled'>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
              <li>Hola mundo</li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <p className='text-xs-center'>
            {new Date().getFullYear()} City Guide For Vegan Restaurants- All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
