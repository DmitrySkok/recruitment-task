import React from 'react';
import Footer from '../../views/Footer/Footer';
import Header from '../../views/Header/Header';
import Hero from '../../views/Hero/Hero';
import Intro from '../../views/Intro/Intro';
import Pricing from '../../views/Pricing/Pricing';
import UndrawMobLog from '../../views/UndrawMobLog/UndrawMobLog';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Hero />
      <UndrawMobLog />
      <Intro />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;