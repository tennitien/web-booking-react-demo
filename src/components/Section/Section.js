import React from 'react';
import City from './City/City';
import Hotel from './Hotel/Hotel';
import HotelList from './HotelList/HotelList';
import './Section.css';
export default function Section(props) {
  return (
    <section className='row'>
      <City />
      <h2>Browse by property type</h2>
      <Hotel />
      <h2>Homes guests love</h2>

      <HotelList />
    </section>
  );
}
