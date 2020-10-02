import React from 'react';
import { navItems } from './const.jsx';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav__menu'>
        {navItems.map((hatam) => (
          <li className='nav__item'>
            <a href='index.html'>
              {console.log(hatam.icon)}
              {hatam.icon}
              {hatam.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
