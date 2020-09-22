import React from 'react';

import logo from '../assets/crown.svg';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <a className='navbar-brand text-white ml-5' href='...'>
          <img src={logo} alt='logo'  />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active '>
              <a className='nav-link text-white ml-5' href='...'>
                HOME <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white ml-5' href='...'>
                RECIPE
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white ml-5' href='...'>
                CONTACT US
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-info my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
