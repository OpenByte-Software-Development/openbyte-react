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
    <header className="lg:py-7 border-b border-orange w-screen fixed bg-white z-50">
      <div className="container lg:flex mx-auto items-center hidden">
        <div className="flex item s-center h-8 cursor-pointer">
          <Link prefetch={false} href="/">
            <a>
              <Image
                src={logo}
                alt="Openbyte logo"
                className="h-8"
                height={logo.height}
                width={logo.width}
              />
            </a>
          </Link>
        </div>

        <div className="w-full flex justify-end">
          <nav className="flex justify-end items-center">
            <div className="ml-10 relative">
              <Link prefetch={false} href="/">
                <a>
                  <span
                    className={`${
                      basePath === "/"
                        ? activeNavItemStyle
                        : inactiveNavItemStyle
                    } text-sm font-bold cursor-pointer`}
                  >
                    Home
                  </span>
                </a>
              </Link>
            </div>

            <Popover className="ml-10 relative">
              {({ open }) => (
                <>
                  <Popover.Button className="">
                    <div
                      className={`${
                        basePath === "/services"
                          ? activeNavItemStyle
                          : inactiveNavItemStyle
                      } flex items-center`}
                    >
                      <span className="mr-2 text-sm font-bold hover:text-gray-900 focus:outline-none">
                        Services
                      </span>
                      <div className="flex items-center p-[2px]">
                        <Image
                          src={arrowIcon}
                          alt="arrow icon"
                          height={arrowIcon.height}
                          width={arrowIcon.width}
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
                    <Popover.Panel className="border-t-3 border-orange bg-white absolute z-10 p-8 top-9 whitespace-nowrap max-w-fit">
                      <div className="w-full flex flex-col gap-4 text-sm font-bold">
                        <Link
                          prefetch={false}
                          href="/services/web-development-services"
                        >
                          <a
                            className={`max-w-fit w-auto ${inactiveNavItemStyle}`}
                          >
                            Web Development Services
                          </a>
                        </Link>
                        <Link
                          prefetch={false}
                          href="/services/mobile-application-development"
                        >
                          <a
                            className={`max-w-fit w-auto ${inactiveNavItemStyle}`}
                          >
                            Mobile Application Development
                          </a>
                        </Link>
                        <Link
                          prefetch={false}
                          href="/services/mvp-app-development"
                        >
                          <a
                            className={`max-w-fit w-auto ${inactiveNavItemStyle}`}
                          >
                            MVP App Development
                          </a>
                        </Link>
                        <Link prefetch={false} href="/about-us#team">
                          <a
                            className={`max-w-fit w-auto ${inactiveNavItemStyle}`}
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
              <Link prefetch={false} href="/about-us">
                <a
                  className={`${
                    basePath === "/about-us"
                      ? activeNavItemStyle
                      : inactiveNavItemStyle
                  } text-sm font-bold`}
                >
                  About Us
                </a>
              </Link>
            </div>

            <div className="ml-10 relative">
              <Link prefetch={false} href="/case-studies">
                <a
                  className={`${
                    basePath === "/case-studies"
                      ? activeNavItemStyle
                      : inactiveNavItemStyle
                  } text-sm font-bold`}
                >
                  Case Studies
                </a>
              </Link>
            </div>

            <div className="ml-10 relative">
              <Link prefetch={false} href="/contact-us">
                <a
                  className={`${
                    basePath === "/contact-us"
                      ? activeNavItemStyle
                      : inactiveNavItemStyle
                  } text-sm font-bold`}
                >
                  Contact
                </a>
              </Link>
            </div>
          </nav>

          <div className="ml-20">
            <Link prefetch={false} href="/contact-us">
              <button className="bg-orange text-white text-base rounded-full py-[14px] px-8 font-extrabold">
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
              height={hamburger.height}
              width={hamburger.width}
            />
          </div>
          <div className="flex item s-center h-8 cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt="Openbyte logo"
                  className="h-8"
                  height={logo.height}
                  width={logo.width}
                />
              </a>
            </Link>
          </div>
        </div>
        <MobileMenu show={showMobileMenu} basePath={basePath} />
      </div>
    </header>
  );
};

export default Header;
