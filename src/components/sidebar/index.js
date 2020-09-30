import React from 'react';
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
      <nav>
        <ul className='menu'>
          <li className='menu__item'>Home</li>
          <li className='menu__item'>My network</li>
          <li className='menu__item'>Jobs</li>
          <li className='menu__item'>Messaging</li>
          <li className='menu__item'>Notifications</li>
          <li className='menu__item'>Me</li>
          <li className='menu__item'>Work</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;