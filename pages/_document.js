import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Openbyte" />
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
          <link
            rel="apple-touch-icon"
            type="image/x-icon"
            href="/favicon.png"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=0"
          ></meta>
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
