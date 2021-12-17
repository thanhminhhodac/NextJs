import React from 'react';
import type { AppProps } from 'next/app';
// components
import Head from 'components/common/Head';
import Layout from 'components/common/Layout';
// style
import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <React.Fragment>
    <Head />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </React.Fragment>
);

export default MyApp;
