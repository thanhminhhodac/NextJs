import React from 'react';
import type { AppProps } from 'next/app';
// components
import Head from 'components/common/Head';
// style
import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <React.Fragment>
    <Head />
    <Component {...pageProps} />
  </React.Fragment>
);

export default MyApp;
