import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import DataNarBar from '../../data/navBar.json';
import './NavBar.css';

export default function NavBar(props) {
  const data = DataNarBar.map(item => {
    return (
      <li key={item.type} className={item.active ? 'active' : ''}>
        <span>
          <i className={`fa ${item.icon}`}></i>
        </span>
        <span>{item.type}</span>
      </li>
    );
  });
  return (
    <nav>
      <div className='container-blue' id='navBar'>
        <div className='row'>
          <div className='nav-bar flex-center'>
            <h2>
              <Link to='/'>Booking Website</Link>
            </h2>

            <ul className='main-nav flex-center'>
              <li>
                <Link to='/'>Register</Link>
              </li>
              <li>
                <Link to='/'>Sign up</Link>
              </li>
            </ul>
          </div>
          {/* <!--NavBar-Item  --> */}
          <ul className='navbar-item'>{data}</ul>
        </div>
      </div>
    </nav>
  );
}
