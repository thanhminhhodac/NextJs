// libs
import React from 'react';
// components
import HeaderLogo from 'components/ui/HeaderLogo';
import HeaderNav from 'components/ui/HeaderNav';
import HeaderFunction from 'components/lib/HeaderFunction';
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
