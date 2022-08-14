import React from "react";
import Image from "next/image";
import Link from "next/link";

//Images
import logo from "../../../public/logo-white.svg";
import instagramLogo from "../../../public/icons/instagram.svg";
import linkedinLogo from "../../../public/icons/linkedin.svg";
import facebookLogo from "../../../public/icons/facebook.svg";
import githubLogo from "../../../public/icons/github.svg";
import email from "../../../public/icons/email.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-light-black px-6 lg:p-0">
        <div className="container mx-auto lg:py-16 py-8">
          <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between lg:justify-start">
              <div className="max-w-[100px] lg:w-auto">
                <Link href="/" className="cursor-pointer">
                  <Image src={logo} alt="Openbyte logo" />
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
                </div>
                <div className="flex gap-8">
                  <a
                    href="https://www.facebook.com/openbyte.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-[22px]"
                  >
                    <Image src={facebookLogo} alt="facebook logo" />
                  </a>

                  <a
                    href="https://github.com/OpenByte-Software-Development"
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-[22px]"
                  >
                    <Image src={githubLogo} alt="github logo" />
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <nav>
                <ul>
                  <li className="font-bold text-gray text-base">SERVICES</li>
                  <li className="font-bold text-white text-base mt-6">
                    <Link href="#">
                      <a>Web Development Services</a>
                    </Link>
                  </li>
                  <li className="font-bold text-white text-base mt-6">
                    <Link href="#">
                      <a>Mobile Application Development</a>
                    </Link>
                  </li>
                  <li className="font-bold text-white text-base mt-6">
                    <Link href="#">
                      <a>MVP App Development</a>
                    </Link>
                  </li>
                  <li className="font-bold text-white text-base mt-6">
                    <Link href="#">
                      <a>Dedicated Developers</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden lg:block">
              <nav>
                <ul>
                  <li className="font-bold text-gray text-base">LINKS</li>
                  <li className="font-bold text-white text-base mt-6">
                    <Link href="#">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li className="font-bold text-white text-base mt-6">
                    <Link href="#">
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li className="font-bold text-white text-base mt-6">
                    <Link href="#">
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

                <p className="font-bold text-white text-base mt-2">
                  Strada 31 August 1989 78, Chișinău
                </p>
              </div>

              <div className="mt-6">
                <span className="block font-bold text-gray text-base">
                  Email:
                </span>

                <div className="flex items-center">
                  <div>
                    <Link href="mailto: hi@openbyte.dev" className="block">
                      <a className="font-bold text-orange text-base">
                        hi@openbyte.dev
                      </a>
                    </Link>
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
      <div className="flex justify-center items-center py-5 text-gray border-t-2 border-b-gray bg-light-black">
        Designed with love by Kody©
      </div>
    </div>
  );
};

export default Footer;
