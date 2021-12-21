import React from 'react';
import type { AppProps } from 'next/app';
// components
import Head from 'components/common/Head';
import Layout from 'components/common/Layout';
// context
import { ThemeContextProvider } from 'contexts/ThemeContext';
// style
import 'antd/dist/antd.css';
import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <React.Fragment>
    <Head />
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  </React.Fragment>
);

export default MyApp;
