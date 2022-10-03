import React from "react";
import Image from "next/image";
import Link from "next/link";

//Images
import email from "../../../public/icons/email.svg";
import logoLight from "../../../public/logo-white.svg";
import logoDark from "../../../public/logo-dark.svg";
import instagramLight from "../../../public/icons/instagram.svg";
import linkedinLight from "../../../public/icons/linkedin.svg";
import facebookLight from "../../../public/icons/facebook.svg";
import githubLight from "../../../public/icons/github.svg";

import instagramDark from "../../../public/icons/instagram-black.svg";
import linkedinDark from "../../../public/icons/linkedin-black.svg";
import facebookDark from "../../../public/icons/facebook-black.svg";
import githubDark from "../../../public/icons/github-black.svg";

const FOOTER_STYLE = {
  light: {
    logo: logoDark,
    background: "bg-white",
    textColor: "text-light-black",
    addressColor: "text-black",
    socialIcons: {
      instagram: instagramDark,
      linkedin: linkedinDark,
      facebook: facebookDark,
      github: githubDark,
    },
  },
  dark: {
    logo: logoLight,
    background: "bg-light-black",
    textColor: "text-white",
    addressColor: "text-white",
    socialIcons: {
      instagram: instagramLight,
      linkedin: linkedinLight,
      facebook: facebookLight,
      github: githubLight,
    },
  },
};

const Footer = ({ variant = "dark" }) => {
  const { logo, background, textColor, addressColor, socialIcons } =
    FOOTER_STYLE[variant];

  return (
    <div>
      <div className={`${background} px-6 lg:p-0`}>
        <div className="container mx-auto lg:py-16 py-8">
          <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between lg:justify-start">
              <div className="max-w-[100px] lg:w-auto">
                <Link prefetch={false}  href="/" className="cursor-pointer">
                  <a>
                    <Image src={logo} alt="Openbyte logo" />
                  </a>
                </Link>
              </div>

              <div className="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-2 grid-cols-1 w-44 lg:mt-8 gap-8">
                <div className="flex gap-8">
                  <a
                    href="https://www.instagram.com/open_byte/"
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-[22px]"
                  >
                    <Image src={socialIcons.instagram} alt="instagram logo" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/open-byte-software-development/"
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-[22px]"
                  >
                    <Image src={socialIcons.linkedin} alt="linkedin logo" />
                  </a>
                </div>
                <div className="flex gap-8">
                  <a
                    href="https://www.facebook.com/openbyte.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-[22px]"
                  >
                    <Image src={socialIcons.facebook} alt="facebook logo" />
                  </a>

                  <a
                    href="https://github.com/OpenByte-Software-Development"
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-[22px]"
                  >
                    <Image src={socialIcons.github} alt="github logo" />
                  </a>
                </div>
              </div>
              <div className="font-bold text-gray text-base mt-6">
                <Link prefetch={false}  href="/privacy-and-policy">
                  <a target="_blank" rel="noreferrer">
                    PRIVACY POLICY
                  </a>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <nav className={`${textColor} font-bold text-base`}>
                <ul>
                  <li className=" text-gray">SERVICES</li>
                  <li className="mt-6">
                    <Link prefetch={false}  href="/services/web-development">
                      <a>Web Development Services</a>
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link prefetch={false}  href="/services/mobile-applications">
                      <a>Mobile Application Development</a>
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link prefetch={false}  href="/services/mvp-development">
                      <a>MVP App Development</a>
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link prefetch={false}  href="/about-us#team">
                      <a>Dedicated Developers</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden lg:block">
              <nav className={`${textColor} font-bold text-base`}>
                <ul>
                  <li className="font-bold text-gray text-base">LINKS</li>
                  <li className="mt-6">
                    <Link prefetch={false}  href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link prefetch={false}  href="/case-studies">
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link prefetch={false}  href="/calculator">
                      <a>Estimate App cost</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <span className="block font-bold text-gray text-base">
                CONTACT US
              </span>

              <div className="mt-6">
                <span className="block font-bold text-gray text-base">
                  Office:
                </span>

                <p className={`font-bold ${addressColor} text-base mt-2`}>
                  Strada 31 August 1989 78, Chișinău
                </p>
              </div>

              <div className="mt-6">
                <span className="block font-bold text-gray text-base">
                  Email:
                </span>

                <div className="flex items-center">
                  <div>
                    <a
                      href="mailto: hi@openbyte.dev"
                      className="block font-bold text-orange text-base"
                    >
                      hi@openbyte.dev
                    </a>
                  </div>
                  <div className="ml-6 flex items-center">
                    <Image src={email} alt="email icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${background} flex justify-center items-center py-5 text-gray border-t-2 border-b-gray`}
      >
        Designed with love by Kody©
      </div>
    </div>
  );
};

export default Footer;
