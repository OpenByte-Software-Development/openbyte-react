import "../styles/styles.css";
import "../styles/globals.css";
import CookiesConsent from "../components/CookiesConsent";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <CookiesConsent />
    </>
  );
};

export default MyApp;
