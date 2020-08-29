import React from "react";
import logo from "./assets/unclesbriyani-logo.svg";
import "./App.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          Uncle's <code>Biryani</code>
        </h1>
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
            href='https://wa.me/7085054073'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp className='social-items' />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
