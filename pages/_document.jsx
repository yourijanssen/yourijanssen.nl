import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default function Document({ locale }) {
  return (
    <Html lang={locale ?? "en"}>
      <Head />
      <body>
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
