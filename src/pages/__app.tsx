import React from 'react';
import '../styles/importer';

/**
 * includes all pages, here allows to import the css import everywhere
 * @Param {any} Component
 * @Param {any} pageProps
 * @Constructor
 */
export default function MyApp({ Component, pageProps }: any): JSX.Element {
  return <Component {...pageProps} />;
};
