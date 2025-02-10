import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <Link className='anchor-link' to='home' smooth={true} duration={1000} onClick={() => setMenu("home")}>
            <p>Home</p>x
          </Link>
          {menu === "home" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <Link className='anchor-link' to='about' smooth={true} duration={1000} onClick={() => setMenu("about")}>
            <p>About me</p>
          </Link>
          {menu === "about" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <Link className='anchor-link' to='services' smooth={true} duration={1000} onClick={() => setMenu("services")}>
            <p>Services</p>
          </Link>
          {menu === "services" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <Link className='anchor-link' to='work' smooth={true} duration={1000} onClick={() => setMenu("work")}>
            <p>Portfolio</p>
          </Link>
          {menu === "work" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <Link className='anchor-link' to='contact' smooth={true} duration={1000} onClick={() => setMenu("contact")}>
            <p>Contact</p>
          </Link>
          {menu === "contact" && <img src={underline} alt='underline' />}
        </li>
      </ul>
      <Link className='anchor-link' to='contact' smooth={true} duration={1000} onClick={() => setMenu("contact")}>
      <div className="nav-connect">Connect With Me</div>
      </Link>
    </div>
  );
};

export default Navbar;