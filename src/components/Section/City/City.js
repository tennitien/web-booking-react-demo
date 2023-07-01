import React from 'react';
import DataCity from '../../../data/city.json';
import './City.css';

export default function City(props) {
  const data = DataCity.map(city => {
    return (
      <div className='section-city__item' key={city.name}>
        <img src={city.image} alt={city.name} />
        <div className='section-city__text'>
          <h3>{city.name}</h3>
          <p>{city.subText}</p>
        </div>
      </div>
    );
  });

  return <div className='section-city section'>{data}</div>;
}
