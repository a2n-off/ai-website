import React from 'react';
import '../styles/scss/importer.scss';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';

const NoSsrCursor = dynamic(() => import('../components/cursor'), {
  ssr: false
})

/**
 * includes all pages, here allows to import the css import everywhere
 * @Param {any} Component
 * @Param {any} pageProps
 * @Constructor
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Component {...pageProps}/>
      <NoSsrCursor/>
    </React.Fragment>
  );
};
