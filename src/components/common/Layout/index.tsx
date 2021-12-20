// lib
import React, { FC } from 'react';
// components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
// styles
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
