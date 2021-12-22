// libs
import React from 'react';
// components
import TextTransform from './mains/TextTransform';
// style
import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperInner}>
      <TextTransform />
      This is Hero section
    </div>
  </div>
);

export default Hero;
