import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="OpenByte, We build software." />
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
          <link
            rel="apple-touch-icon"
            type="image/x-icon"
            href="/favicon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
