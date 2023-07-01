import React from 'react';
import { Link } from 'react-router-dom';

import './SearchListItem.css';
import Button from '../UI/Button/Button';

export default function SearchListItem(props) {
  return (
    <div className='searchItem'>
      <div className='searchItem-img'>
        <img src={props.item.image_url} />
      </div>
      <div className='searchItem-info'>
        <h2 className='searchItem-info__name'>{props.item.name}</h2>
        <p>{props.item.distance} from center</p>
        <p className='searchItem-info__tag'>{props.item.tag}</p>
        <p className='searchItem-info__description'>
          <strong>{props.item.description}</strong>
        </p>
        <p>{props.item.type}</p>
        <p className='searchItem-info__cancel'>
          <strong>Free cancellation</strong>
        </p>
        <p className='searchItem-info__cancel'>
          You can cancel later, so lock in this great price today!
        </p>
      </div>
      <div className='searchItem-rate'>
        <div className='searchItem-rate__text'>
          <p className='rate_text'>
            <strong>{props.item.rate_text}</strong>
          </p>
          <p className='rate'>{props.item.rate}</p>
        </div>
        <div className='searchItem-rate__price'>
          <p className='price'>$ {props.item.price}</p>
          <p className='price-text'>Includes taxes and fees</p>
          <Link to='/detail'>
            <Button className='radius'>See availability</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
