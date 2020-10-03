import React from 'react';
import {Link} from 'react-router-dom';
import { navItems } from './const.jsx';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav__menu'>
        {navItems.map((hatam) => (
          <li className='nav__item'>
            <Link to={hatam.link}>
              {hatam.icon}
              {hatam.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
