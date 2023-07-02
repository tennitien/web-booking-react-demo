import SearchPopup from '../../components/SearchPopup/SearchPopup';
import SearchList from '../../components/SearchList/SearchList';

import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
const Search = props => {
  const location = useLocation();
  const dataHomePage = location.state;
  return (
    <main>
      <NavBar />
      <div id='search' className='row'>
        <SearchPopup data={dataHomePage} />
        <SearchList />
      </div>
      <Contact />
      <Footer />
    </main>
  );
};

export default Search;
