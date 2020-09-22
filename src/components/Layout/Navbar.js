import React from 'react';

import logo from '../../assets/crown.svg';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <Link className='navbar-brand text-white ml-5' href='...'>
          <img src={logo} alt='logo'  />
        </Link>
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
              <Link className='nav-link text-white ml-5' href='...'>
                HOME <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white ml-5' href='...'>
                RECIPE
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white ml-5' href='...'>
                CONTACT US
              </Link>
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
