// lib
import React, { FC } from 'react';
// components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <div className="main-wrapper">
      <div className="main-wrapper-inner">{children}</div>
    </div>
    <Footer />
  </>
);

export default Layout;
