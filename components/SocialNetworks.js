import React from "react";
import Link from "next/link";
import Image from "next/image";

//Images
import instagramLogo from "../public/icons/instagram-black.svg";
import linkedinLogo from "../public/icons/linkedin-black.svg";
import facebookLogo from "../public/icons/facebook-black.svg";
import gmailLogo from "../public/icons/gmail-black.svg";

const SocialNetworks = () => {
  return (
    <div className="absolute left-0 top-[300px] border-3 border-light-black rounded-tr-3xl rounded-br-3xl hidden lg:block bg-beige">
      <div className="p-6 flex flex-col gap-6">
        <a
          href="https://www.instagram.com/open_byte/"
          target="_blank"
          rel="noreferrer"
          className="min-w-[22px]"
        >
          <Image src={instagramLogo} alt="instagram logo" />
        </a>

        <a
          href="https://www.linkedin.com/company/open-byte-software-development/"
          target="_blank"
          rel="noreferrer"
          className="min-w-[22px]"
        >
          <Image src={linkedinLogo} alt="linkedin logo" />
        </a>

        <a
          href="https://www.facebook.com/openbyte.dev"
          target="_blank"
          rel="noreferrer"
          className="min-w-[22px]"
        >
          <Image src={facebookLogo} alt="facebook logo" />
        </a>

        <a
          href="mailto: hi@openbyte.dev"
          target="_blank"
          rel="noreferrer"
          className="min-w-[22px]"
        >
          <Image src={gmailLogo} alt="gmail logo" />
        </a>
      </div>
    </div>
  );
};

export default SocialNetworks;
