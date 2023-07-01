import React from 'react';
import { Link } from 'react-router-dom';

import DataHotelList from '../../../data/hotel_list.json';
import './HotelList.css';

export default function HotelList(props) {
  let url;
  const data = DataHotelList.map((hotel, index) => {
    return (
      <div className='section-hotelList__item' key={index}>
        <img src={hotel.image_url} alt={hotel.name} />
        <div className='section-hotelList__text'>
          <h3>
            <a href='/' className='nameHotel'>
              {hotel.name}
            </a>
          </h3>
          <p className='city'>{hotel.city}</p>
          <p>
            <strong>
              Starting from <span className='price'>$ {hotel.price}</span>
            </strong>
          </p>
          <p>
            <span className='rate'>{hotel.rate}</span>
            <span className='type'>{hotel.type}</span>
          </p>
        </div>
      </div>
    );
  });

  return <div className='section section-hotelList'>{data}</div>;
}
