import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import MobileMenu from "./MobileHeader";

// Images
import logo from "../../../public/logo.svg";
import hamburger from "../../../public/hamburger.svg";
import xSign from "../../../public/x-sign.svg";
import arrowIcon from "../../../public/icons/arrow.svg";

// const NavItem = ({ title, href, icon, subMenu }) => {
//   return (
//     <div>
//       <Link href={href}>
//         <>
//           {title}
//           {icon && <Icon icon={icon} />}
//         </>
//       </Link>
//       {Array.isArray(subMenu) && (
//         <div className="hidden w-auto p-8 border-3 border-orange bg-white">
//           {subMenu.map(({ title, href }) => {
//             return (
//               <div key={title}>
//                 <Link href={href}>{title}</Link>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <Image src={logo} alt="Openbyte logo" className="h-8" height="32" />
        </div>

        <div className="w-full flex justify-end">
          <nav className="flex justify-end items-center">
            <div className="ml-10">
              <Link href="/">
                <a className="text-base border-white font-bold hover:text-gray-900 hover:border-b-3 hover:border-orange focus:border-b-3 focus:border-orange">
                  Home
                </a>
              </Link>
            </div>

            <Popover className="ml-10 relative">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <div className="flex items-center">
                      <span className="mr-2 text-base border-white font-bold hover:text-gray-900 focus:outline-none">
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
                      <div className=" w-full flex flex-col gap-4">
                        <Link href="#">
                          <a className="text-base font-bold">
                            Web Development Services
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="text-base font-bold">
                            Mobile Application Development
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="text-base font-bold">
                            MVP App Development
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="text-base font-bold">
                            Dedicated Developers
                          </a>
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <div className="ml-10">
              <Link href="/about-us">
                <a className="text-base border-white font-bold hover:text-gray-900 hover:border-b-3 hover:border-orange focus:border-b-3 focus:border-orange">
                  About Us
                </a>
              </Link>
            </div>

            <div className="ml-10">
              <Link href="/case-studies">
                <a className="text-base border-white font-bold hover:text-gray-900 hover:border-b-3 hover:border-orange focus:border-b-3 focus:border-orange">
                  Case Studies
                </a>
              </Link>
            </div>

            <div className="ml-10">
              <Link href="/contact">
                <a className="text-base border-white font-bold hover:text-gray-900 hover:border-b-3 hover:border-orange focus:border-b-3 focus:border-orange">
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
        <MobileMenu show={showMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
