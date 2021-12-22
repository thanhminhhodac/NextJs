// libs
import React from 'react';
// components
import Hero from 'components/lib/Hero';
// style
import styles from 'styles/pages/Home.module.scss';

const Home = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperInner}>
      <Hero />
    </div>
  </div>
);

export default Home;
