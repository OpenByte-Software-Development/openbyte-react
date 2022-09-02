import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import MobileMenu from "./MobileHeader";

// Images
import logo from "../../../public/logo.svg";
import hamburger from "../../../public/hamburger.svg";
import xSign from "../../../public/x-sign.svg";
import arrowIcon from "../../../public/icons/arrow.svg";

const getBasePath = (path) => {
  if (path === "/") return path;
  const splitedPath = path.split("/").filter((item) => item !== "");

  return splitedPath.length <= 1 ? path : `/${splitedPath[0]}`;
};

// nav item style for active and normal state
export const activeNavItemStyle =
  "border-orange border-b-3 after:content-[''] after:bg-orange after:absolute after:rounded-full after:w-[3px] after:h-[3px] after:-bottom-2 after:right-0 after:left-0 after:mr-auto after:ml-auto";
export const inactiveNavItemStyle =
  "border-white border-b-3 hover:text-gray-900 border-white hover:border-b-3 hover:border-orange focus:border-b-3 focus:border-orange";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { route: currentPath } = useRouter();
  const basePath = getBasePath(currentPath);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("fixed");
    } else {
      document.body.classList.remove("fixed");
    }
  });

  return (
    <header className="lg:py-7 border-b-3 border-orange w-screen fixed t-0 bg-white z-50">
      <div className="container lg:flex mx-auto items-center hidden">
        <div className="flex item s-center h-8 cursor-pointer">
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="Openbyte logo"
                className="h-8"
                height="32"
              />
            </a>
          </Link>
        </div>

        <div className="w-full flex justify-end">
          <nav className="flex justify-end items-center">
            <div className="ml-10 relative">
              <Link href="/">
                <a>
                  <span
                    className={`${
                      basePath === "/"
                        ? activeNavItemStyle
                        : inactiveNavItemStyle
                    } text-base font-bold cursor-pointer`}
                  >
                    Home
                  </span>
                </a>
              </Link>
            </div>

            <Popover className="ml-10 relative">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <div
                      className={`${
                        basePath === "/services"
                          ? activeNavItemStyle
                          : inactiveNavItemStyle
                      } text-base font-bold flex items-center`}
                    >
                      <span className="mr-2 text-base font-bold hover:text-gray-900 focus:outline-none">
                        Services
                      </span>
                      <div className="flex items-center p-[2px]">
                        <Image
                          src={arrowIcon}
                          alt="arrow icon"
                          className={`duration-75 ${
                            open ? "rotate-180 origin-center duration-75" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="border-t-3 border-orange bg-white absolute z-10 p-8 top-9 w-80">
                      <div className="w-full flex flex-col gap-4">
                        <Link href="/services/web-development">
                          <a
                            className={`max-w-fit text-base font-bold ${inactiveNavItemStyle}`}
                          >
                            Web Development Services
                          </a>
                        </Link>
                        <Link href="/services/mobile-applications">
                          <a
                            className={`max-w-fit w-auto text-base font-bold ${inactiveNavItemStyle}`}
                          >
                            Mobile Application Development
                          </a>
                        </Link>
                        <Link href="/services/mvp-development">
                          <a
                            className={`max-w-fit w-auto text-base font-bold ${inactiveNavItemStyle}`}
                          >
                            MVP App Development
                          </a>
                        </Link>
                        <Link href="/about-us#team">
                          <a
                            className={`max-w-fit w-auto text-base font-bold ${inactiveNavItemStyle}`}
                          >
                            Dedicated Developers
                          </a>
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <div className="ml-10 relative">
              <Link href="/about-us">
                <a
                  className={`${
                    basePath === "/about-us"
                      ? activeNavItemStyle
                      : inactiveNavItemStyle
                  } text-base font-bold`}
                >
                  About Us
                </a>
              </Link>
            </div>

            <div className="ml-10 relative">
              <Link href="/case-studies">
                <a
                  className={`${
                    basePath === "/case-studies"
                      ? activeNavItemStyle
                      : inactiveNavItemStyle
                  } text-base font-bold`}
                >
                  Case Studies
                </a>
              </Link>
            </div>

            <div className="ml-10 relative">
              <Link href="/contact">
                <a
                  className={`${
                    basePath === "/contact"
                      ? activeNavItemStyle
                      : inactiveNavItemStyle
                  } text-base font-bold`}
                >
                  Contact
                </a>
              </Link>
            </div>
          </nav>

          <div className="ml-20">
            <Link href="/contact">
              <button className="bg-orange text-white text-base rounded-3xl py-3.5 px-8 font-extrabold">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="block lg:hidden p-6">
        <div className="flex justify-between items-center">
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="cursor-pointer"
          >
            <Image
              src={showMobileMenu ? xSign : hamburger}
              alt="hamburger icon"
            />
          </div>
          <div className="flex item s-center h-8 cursor-pointer">
            <Image src={logo} alt="Openbyte logo" className="h-8" height="32" />
          </div>
        </div>
        <MobileMenu show={showMobileMenu} basePath={basePath} />
      </div>
    </header>
  );
};

export default Header;
