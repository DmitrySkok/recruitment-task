import React from 'react';
import Header from '../../views/Header/Header';
import Hero from '../../views/Hero/Hero';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;