import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
import iconHamburguer from '../../images/icon-hamburger.svg';
import IconCloseMenu from '../../images/icon-close.svg';
import './header-style-desktop.css';
import './header-style-mobile.css';

const Header = () => {
  const [checked, setChecked] = useState(false);

  const isChecked = () => {
    checked ? setChecked(!checked) : setChecked(!checked);
  }

  return (
  <header className = "top-bar container">
    <img className="logo" src = { Logo } alt = "logo" />
    <div>
      <label className="label-menu-mobile" htmlFor = "input-menu-hamburguer" onClick={ isChecked }>
        { checked
          ? (<img className="btn-close-menu" src={ IconCloseMenu } alt="close-menu" />)
          : (<div className="menu-hamburguer">
              <img src = { iconHamburguer }
              alt = "icon-menu-hamburguer" />
              <img src = { iconHamburguer }
              alt = "icon-menu-hamburguer" />
            </div>)
        }
      </label>
      <input type = "checkbox" id = "input-menu-hamburguer" />
      <nav className = "main-menu" >
        <ul >
          <li> Home </li>
          <li> About </li>
          <li> Contact </li> 
          <li> Blog </li>
          <li> Careers </li>
        </ul>
      </nav> 
    </div>
    <button className = "btn-request-invite-desktop" > Request Invite </button>
  </header>
);
}

export default Header;