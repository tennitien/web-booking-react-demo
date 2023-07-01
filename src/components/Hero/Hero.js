/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../UI/Button/Button';
import DateRangeComponent from '../DateRangeComponent/DateRangeComponent';
import './Hero.css';

export default function Hero() {
  return (
    <div id='hero' className='container-blue'>
      <div className='row hero'>
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <Button type='submit'>Sign in / Register</Button>
      </div>
    </div>
  );
}
