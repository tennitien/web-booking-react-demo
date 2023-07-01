import SearchPopup from '../../components/SearchPopup/SearchPopup';
import SearchList from '../../components/SearchList/SearchList';

import { useLocation } from 'react-router-dom';

const Search = props => {
  const location = useLocation();
  const dataHomePage = location.state;
  return (
    <div id='search' className='row'>
      <SearchPopup data={dataHomePage} />
      <SearchList />
    </div>
  );
};

export default Search;
