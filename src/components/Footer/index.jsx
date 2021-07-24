import React from 'react';
import IconFacebook from '../../images/icon-facebook.svg';
import IconYoutube from '../../images/icon-youtube.svg';
import IconTwitter from '../../images/icon-twitter.svg';
import IconPinterest from '../../images/icon-pinterest.svg';
import IconInstagram from '../../images/icon-instagram.svg';
import Logo from '../../images/logo-footer.svg';
import './style.css';
import './footer-style-desktop.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <img className="logo-footer" src={ Logo } alt="logo easybank footer" />
        <ul className="ul-social-media">
          <li>
            <img className="social-media" src={ IconFacebook } alt="icon Facebook" />
          </li>
          <li>
            <img className="social-media" src={ IconYoutube } alt="icon YouTube" />
          </li>
          <li>
            <img className="social-media" src={ IconTwitter } alt="icon twitter" />
          </li>
          <li>
            <img className="social-media" src={ IconPinterest } alt="icon pinterest" />
          </li>
          <li>
            <img className="social-media" src={ IconInstagram } alt="icon Instagram" />
          </li>
        </ul>
      </div>
      <nav className="menu-footer-mobile">
        <ul className="menu-footer">
          <li> About Us </li>
          <li> Contact </li>
          <li> Blog </li>
          <li> Careers </li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </nav>
      <nav className="menu-footer-desktop">
        <ul>
          <li> About Us </li>
          <li> Contact </li>
          <li> Blog </li>
        </ul>
        <ul>
          <li> Careers </li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </nav>
      <div className="btn-request-invite-all-rights-reserved">
        <button className = "btn-request-invite" > Request Invite </button>
        <span> © Easybank. All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;