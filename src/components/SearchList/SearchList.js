import React from 'react';
import SearchListItem from '../SearchListItem/SearchListItem';
import DataSearch from '../../data/search.json';

import './SearchList.css';

export default function SearchList(props) {
  return (
    <div>
      {DataSearch.map((item, index) => (
        <SearchListItem item={item} key={index} />
      ))}
    </div>
  );
}
