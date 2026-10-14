import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
import {installHomeReloadScroll} from '@/lib/home-reload-scroll.mjs';

export default function Document({ locale }) {
  return (
    <Html lang={locale ?? "en"}>
      <Head>
        <link rel="icon" type="image/png" href="/assets/profilePic.png" />
        <link rel="apple-touch-icon" href="/assets/profilePic.png" />
      </Head>
      <body>
        <Script id="home-reload-scroll" strategy="beforeInteractive">{`(${installHomeReloadScroll.toString()})();`}</Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 * Supplies the active locale to the root HTML element for accessibility and SEO.
 */
Document.getInitialProps = async (context) => {
  const initialProps = await NextDocument.getInitialProps(context);

  return {
    ...initialProps,
    locale: context.locale,
  };
};
