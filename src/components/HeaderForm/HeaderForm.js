import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../UI/Button/Button';
import DateRangeComponent from '../DateRangeComponent/DateRangeComponent';

import './HeaderForm.css';

export default function HeaderForm(props) {
  const navigate = useNavigate();
  const [enterLocation, setEnterLocation] = useState('');
  const [enterDate, setEnterDate] = useState('');
  const [enterAdult, setEnterAdult] = useState(0);
  const [enterChildren, setEnterChildren] = useState(0);
  const [enterRoom, setEnterRoom] = useState(0);

  const locationChangeHandler = event => {
    if (event.target.value.trim().length === 0) return;
    return setEnterLocation(event.target.value);
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
  // Form
  const formSubmitHandler = event => {
    event.preventDefault();
    // Check validate
    let isValidate =
      Boolean(enterLocation && enterAdult && enterChildren && enterRoom) &&
      true;
    if (!isValidate) {
      alert('Please enter information');
      return;
    }
    // change page && get data to Search Page
    navigate('search', {
      state: {
        location: enterLocation,
        date: enterDate,
        adult: enterAdult,
        children: enterChildren,
        room: enterRoom,
      },
    });
  };

  //
  return (
    <div id='header-form' className='row'>
      <form onSubmit={formSubmitHandler} className='header-form'>
        <div className='form-controls'>
          <div className='form-control'>
            <span className='hidden'>
              <i className='fa fa-bed'></i>
            </span>
            <input
              className='header-input'
              type='text'
              value={enterLocation}
              placeholder='Where are you going?'
              onChange={locationChangeHandler}
            />
          </div>
          <div className='form-control form-control__date'>
            <span className='hidden'>
              <i className='fa fa-calendar'></i>
            </span>
            <DateRangeComponent
              className={'header-input'}
              onGetDate={date => setEnterDate(date)}
            />
          </div>
          <div className='form-control form-control__human'>
            <span className='hidden'>
              <i className='fa fa-female'></i>
            </span>
            <input
              id='adult'
              type='number'
              step='1'
              value={enterAdult}
              onChange={adultChangeHandler}
              // placeholder='0'
            />
            <label htmlFor='adult'>Adult</label>
            <input
              id='child'
              type='number'
              step='1'
              value={enterChildren}
              onChange={childrenChangeHandler}
              // placeholder='0'
            />
            <label htmlFor='child'>Children</label>

            <input
              id='room'
              type='number'
              step='1'
              value={enterRoom}
              onChange={roomChangeHandler}
              // placeholder='0'
            />
            <label htmlFor='room'>Room</label>
          </div>
          {/*  */}
          <div className='form-control'>
            <Button type='submit'>Search</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
