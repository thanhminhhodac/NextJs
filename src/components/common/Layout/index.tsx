// lib
import React, { FC, useEffect, useState } from 'react';
// components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
// context
import { useTheme } from 'contexts/ThemeContext';
// styles
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const { isDarkTheme } = useTheme();
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const newTheme = isDarkTheme ? 'dark' : 'light';
    setTheme(newTheme);
  }, [isDarkTheme]);
  return (
    <div className={styles.wrapper} data-theme={theme}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
