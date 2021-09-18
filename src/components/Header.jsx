import React from 'react';
import './Header.css';
import { logo } from '@assets';

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="headerLogo" alt="logo" />
      <p>Image Gallery</p>
    </div>
  );
};
