import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookiesConsent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept all"
      cookieName="accept-cookies-policy"
      disableStyles
      enableDeclineButton
      declineButtonClasses="bg-transparent text-white text-sm rounded-full border-white border-3 py-[9px] px-[21px] font-extrabold lg:w-max"
      buttonClasses="bg-orange text-white text-sm rounded-full border-orange border-3 py-[9px] px-[24px] font-extrabold lg:w-max"
      containerClasses="flex flex-col lg:flex-row items-center max-w-[1184px] mx-auto left-0 right-0 fixed lg:rounded-full bg-light-black text-white text-base leading-[28px] font-bold lg:py-[30px] lg:px-[56px] p-6 lg:mb-6 z-50"
      buttonWrapperClasses="flex lg:flex-row flex-col gap-6 lg:mt-0 mt-4 w-full lg:w-auto"
    >
      We use cookies to enhance your browsing experience, serve personalized ads
      or content, and analyze our traffic. By clicking &quot;Accept All&quot;,
      you consent to our use of cookies.{" "}
      <Link prefetch={false} href="/privacy-and-policy">
        <a className="text-orange" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
      </Link>
    </CookieConsent>
  );
};

export default CookiesConsent;
