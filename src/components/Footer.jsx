import React from 'react';
import './Footer.scss';

const Footer = props => (
  <footer>
    <div className="container">
      <div className="section">
        <p>Questions</p>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </div>
      <div className="section">
        <p>About</p>
        <a href="#">Our Mission</a>
        <a href="#">Company</a>
        <a href="#">Blog</a>
      </div>
      <div className="section">
        <p>Support</p>
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="section">
        <p>Contact</p>
        <a href="#">Email Us</a>
        <a href="#">Live Chat</a>
      </div>
    </div>
  </footer>
);

export default Footer;
