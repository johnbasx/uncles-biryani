import React from "react";
import logo from "./assets/unclesbriyani-logo.svg";
import "./App.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='heading-class'>
          <h1 className='heading'>Uncle's Biryani</h1>
          <span className='heading-tm'>TM</span>
        </div>

        <p>Sorry, website is under development</p>
        <div className='social-links'>
          <a
            className='App-link'
            href='https://www.instagram.com/uncles.biryani/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='social-items' />
          </a>

          <a
            className='App-link'
            href='https://wa.me/c/917085054073'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp className='social-items' />
          </a>
        </div>
        <a className='phone' href='tel:+91-7085054073'>
          <strong>+91-7085054073</strong>
        </a>
        <p className='phone-text'>Contact us for orders</p>
      </header>
    </div>
  );
}

export default App;
