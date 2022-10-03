import "../styles/styles.css";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";
const CookiesConsent = dynamic(() => import("../components/CookiesConsent"));
const TawkMessengerReact = dynamic(() => import("@tawk.to/tawk-messenger-react"));
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        autoClose={4000}
        position="bottom-center"
        className="mt-"
      />
      <TawkMessengerReact
        propertyId="624c4d1a2abe5b455fc50397"
        widgetId="1fvt0qc0v"
      />
      <CookiesConsent />
    </>
  );
};

export default MyApp;
