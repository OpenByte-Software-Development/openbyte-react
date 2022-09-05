import "../styles/styles.css";
import "../styles/globals.css";
import CookiesConsent from "../components/CookiesConsent";
import Head from "next/head";

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
      <CookiesConsent />
    </>
  );
};

export default MyApp;
