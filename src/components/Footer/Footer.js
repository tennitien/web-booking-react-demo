import React from 'react';
import './Footer.css';
import DataFooter from '../../data/footer.json';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  function renderArr(index) {
    return DataFooter[index].col_values.map((item, i) => (
      <li key={i}>
        <Link to='/'>{item}</Link>
      </li>
    ));
  }
  const data = DataFooter.map((item, index) => {
    return <ul key={item.col_number}>{renderArr(index)}</ul>;
  });
  return <div className='row footer'>{data}</div>;
}
