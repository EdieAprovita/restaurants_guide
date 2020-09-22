import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>
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
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4>Hola</h4>
              <ul className='list-unstyled'>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4>Hola</h4>
              <ul className='list-unstyled'>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
                <li>
                  <a href='/'>Hola mundo</a>
                </li>
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
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGray);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
