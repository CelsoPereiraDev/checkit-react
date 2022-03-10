import './style.css';
import React from 'react';
import logoImg from './logo.svg';

function Logo() {
  return (
    <figure className="logo">
      <img
        src={logoImg}
        alt="Logo - CheckIt!"
        className="logo__img"
      />
    </figure>

  );
}

export default Logo;
