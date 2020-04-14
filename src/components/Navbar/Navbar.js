import React from 'react';
import './Navbar.css';
import piePic from '../../assets/apple-pie.png';

const Navbar = () => {
  return(
    <div>
      <nav>
        <img id="piePic" src={piePic} alt="pie" />
      </nav>
    </div>
  );
};

export default Navbar;