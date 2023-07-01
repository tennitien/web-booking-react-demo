import React from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import HeaderForm from '../HeaderForm/HeaderForm';

import './Header.css';

export default function Header() {
  return (
    <header>
      <NavBar />
      <Hero />
      <HeaderForm />
    </header>
  );
}
