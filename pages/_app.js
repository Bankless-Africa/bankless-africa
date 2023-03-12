import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y5W9R1WE9J`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y5W9R1WE9J');
        `}
      </Script>
      <script src="../path/to/flowbite/dist/flowbite.js"></script>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
