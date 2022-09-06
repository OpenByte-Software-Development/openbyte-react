import "../styles/styles.css";
import "../styles/globals.css";
import CookiesConsent from "../components/CookiesConsent";
import Head from "next/head";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
      <TawkMessengerReact
        propertyId="624c4d1a2abe5b455fc50397"
        widgetId="1fvt0qc0v"
      />
      <CookiesConsent />
    </>
  );
};

export default MyApp;
