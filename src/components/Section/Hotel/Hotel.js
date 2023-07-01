import React from 'react';
import DataType from '../../../data/type.json';
import './Hotel.css';

export default function Hotel(props) {
  const data = DataType.map(type => {
    return (
      <div className='section-type__item' key={type.name}>
        <img src={type.image} alt={type.name} />
        <h3>
          <strong>{type.name}</strong>
        </h3>
        <p>{type.count} hotels</p>
      </div>
    );
  });
  return <div className='section-type section'>{data}</div>;
}
