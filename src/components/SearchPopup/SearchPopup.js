import React, { useState } from 'react';

import Button from '../UI/Button/Button';

import './SearchPopup.css';
export default function SearchPopup(props) {
  const dataHomePage = props.data;

  const [enterLocation, setEnterLocation] = useState('');
  const [enterDate, setEnterDate] = useState('');
  const [enterMinPrice, setEnterMinPrice] = useState(0);
  const [enterMaxPrice, setEnterMaxPrice] = useState(0);
  const [enterAdult, setEnterAdult] = useState(0);
  const [enterChildren, setEnterChildren] = useState(0);
  const [enterRoom, setEnterRoom] = useState(0);

  const locationChangeHandler = event => {
    if (event.target.value.trim().length === 0) return;
    return setEnterLocation(event.target.value);
  };
  const dateChangeHandler = event => {};
  const minChangeHandler = event => {
    if (event.target.value <= 0) return;
    return setEnterMinPrice(event.target.value);
  };
  const maxChangeHandler = event => {
    if (event.target.value <= 0) return;
    return setEnterMaxPrice(event.target.value);
  };
  const adultChangeHandler = event => {
    if (event.target.value <= 0) return;
    return setEnterAdult(event.target.value);
  };
  const childrenChangeHandler = event => {
    if (event.target.value <= 0) return;
    return setEnterChildren(event.target.value);
  };
  const roomChangeHandler = event => {
    if (event.target.value <= 0) return;
    return setEnterRoom(event.target.value);
  };
  const submitHandler = event => {
    event.preventDefault();
  };
  return (
    <div className='searchPopup'>
      <h2 className='searchPopup-title'>Search</h2>
      <form
        id='searchPopup'
        className='form-controlsPopUp'
        onSubmit={submitHandler}
      >
        <div className='form-control'>
          <label>Destination</label>
          <input
            type='text'
            className='search-input'
            value={dataHomePage.location}
            onChange={locationChangeHandler}
          />
        </div>
        <div className='form-control'>
          <label>Check-in Date</label>
          <input
            type='text'
            className='search-input'
            value={dataHomePage.date}
            onChange={dateChangeHandler}
          />
        </div>
        <p>
          <strong>Options</strong>
        </p>
        {/*  */}
        <div className='form-option'>
          <div className='label'>
            <label>Min price per night</label>
          </div>
          <div className='input'>
            <input
              type='number'
              className='search-input'
              onChange={minChangeHandler}
            ></input>
          </div>
        </div>
        <div className='form-option'>
          <div className='label'>
            <label>Max price per night</label>
          </div>
          <div className='input'>
            <input
              type='number'
              className='search-input'
              onChange={maxChangeHandler}
            ></input>
          </div>
        </div>{' '}
        <div className='form-option'>
          <div className='label'>
            <label>Adult</label>
          </div>
          <div className='input'>
            <input
              type='number'
              className='search-input'
              value={dataHomePage.adult}
              onChange={adultChangeHandler}
            ></input>
          </div>
        </div>{' '}
        <div className='form-option'>
          <div className='label'>
            <label>Children</label>
          </div>
          <div className='input'>
            <input
              type='number'
              className='search-input'
              value={dataHomePage.children}
              onChange={childrenChangeHandler}
            ></input>
          </div>
        </div>
        <div className='form-option'>
          <div className='label'>
            <label>Room</label>
          </div>
          <div className='input'>
            <input
              type='number'
              className='search-input'
              value={dataHomePage.room}
              onChange={roomChangeHandler}
            ></input>
          </div>
        </div>
        <Button type='submit'>Search</Button>
      </form>
    </div>
  );
}
