import React from 'react';
import type { AppProps } from 'next/app';
// style
import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
