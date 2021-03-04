import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="NavBar">
    <nav>
      <ul>
          <li>
              <Link exact to="/" />
          </li>
        <li>
          <Link exact to="/GroundsList" />
        </li>
        <li>
          <Link exact to="/Ground" />
        </li>
      </ul>
    </nav>

  </div>
);

export default NavBar;
