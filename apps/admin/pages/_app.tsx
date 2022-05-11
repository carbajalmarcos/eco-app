import { AppProps } from 'next/app';
import Head from 'next/head';

import 'config/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eco App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="description" content='Eco App' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;