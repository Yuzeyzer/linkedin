import React from 'react';
import Nav from './nav';
import logo from '../../assets/logo.svg';
import './style.scss';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='logo'>
        <a href='index.html' className='logo__link'>
          <img src={logo} alt='' />
        </a>
      </div>
      <Nav />
    </aside>
  );
}

export default Sidebar;

// index.js #1
// index.jsx #2
// index.ts #3
// index.tsx #4
