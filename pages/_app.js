import "../styles/styles.css";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";
const CookiesConsent = dynamic(() => import("../components/CookiesConsent"));
const SocialNetworks = dynamic(() => import("../components/SocialNetworks"));
const Layout = dynamic(() => import("../components/Layout/index"));
const TawkMessengerReact = dynamic(() =>
  import("@tawk.to/tawk-messenger-react")
);
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <SocialNetworks />
      <Component {...pageProps} />
      <ToastContainer
        autoClose={4000}
        position="bottom-center"
        progressClassName="orange-background"
        bodyClassName="toast-icon"
      />
      <TawkMessengerReact
        propertyId="624c4d1a2abe5b455fc50397"
        widgetId="1fvt0qc0v"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <CookiesConsent />
    </>
  );
};

export default MyApp;
