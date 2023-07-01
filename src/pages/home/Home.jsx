import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import { Fragment } from 'react';
const Home = props => {
  return (
    <Fragment>
      <Header />
      <Section />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
