// libs
import React from 'react';
// components
import HeaderLogo from './mains/HeaderLogo';
import HeaderNav from './mains/HeaderNav';
import HeaderFunction from './mains/HeaderFunction';
// style
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperInner}>
      <HeaderLogo />
      <HeaderNav />
      <HeaderFunction />
    </div>
  </div>
);

export default Header;
