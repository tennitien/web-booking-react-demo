import React from 'react';
import './DetailInfo.css';
import DataDetail from '../../data/detail.json';
import Button from '../UI/Button/Button';

export default function DetailInfo() {
  const data = DataDetail;
  const photos = data.photos.map((item, i) => {
    return <img key={i} src={item} />;
  });
  return (
    <div id='detail' className='row'>
      <div className='detail-name'>
        <div>
          <h1>
            <strong>{data.name}</strong>
          </h1>
          <p className='detail-name__address'>
            <span>
              <i className='fa fa-map-marker' aria-hidden='true'></i>
            </span>
            {'  ' + data.address}
          </p>
          <p className='detail-name__distance'>{data.distance}</p>
          <p className='detail-name__price'>{data.price}</p>
        </div>
        <Button className='radius'>Reserve or Book Now!</Button>
      </div>
      {/*  */}
      <div className='detail-photos'>{photos}</div>
      <div className='detail-title'>
        <div>
          <h1 className='detail-title__title'>
            <strong>{data.title}</strong>
          </h1>
          <p>{data.description}</p>
        </div>
        <div className='detail-title__price'>
          <h4>Perfect for a 9-night stay!</h4>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <h2>
            <strong>$ {data.nine_night_price}</strong> <span>(9nights)</span>
          </h2>
          <Button className='radius'>Reserve or Book Now!</Button>
        </div>
      </div>
    </div>
  );
}
