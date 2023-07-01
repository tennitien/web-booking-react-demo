import React, { useState } from 'react';

import './Contact.css';
import Button from '../UI/Button/Button';

export default function SectionForm(props) {
  const [enterEmail, setEnterEmail] = useState('');
  const emailChangeHandler = e => {
    setEnterEmail(e.target.value);
  };
  const submitChangeHandler = e => {
    return;
  };
  return (
    <section>
      <div className='container-blue' id='contact'>
        <div className='row section-form'>
          <h2>Save time, save money!</h2>
          <p>Sign up and we'll send the best deals to you</p>
          <form onSubmit={submitChangeHandler}>
            <input
              className='input-form'
              type='text'
              placeholder='Your Email'
              onChange={emailChangeHandler}
            />
            <Button type='submit' className='radius'>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
