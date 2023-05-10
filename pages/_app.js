import '@/styles/globals.css'
import 'primeicons/primeicons.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agastus Joyson | Front End Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
