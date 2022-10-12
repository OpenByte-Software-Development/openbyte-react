import React from "react";
import Image from "next/image";
import Link from "next/link";
import { activeNavItemStyle, inactiveNavItemStyle } from "./Header";
import { Transition, Disclosure } from "@headlessui/react";
import { HEADER_NAV } from "../../../lib/constants";

// Images
import arrowIcon from "../../../public/icons/arrow.svg";

const MobileNavItem = ({ title, href, basePath }) => (
  <li className="relative mb-6">
    <span
      className={`${
        basePath === href ? activeNavItemStyle : inactiveNavItemStyle
      } max-w-fit text-center text-xl font-bold text-black cursor-pointer`}
    >
      <Link prefetch={false} href={href}>
        <span>{title}</span>
      </Link>
    </span>
  </li>
);

const MobileNavItemWithSubmenu = ({ title, subMenu, basePath }) => {
  return (
    <Disclosure as="li" className="w-full">
      {({ open }) => (
        <div className="relative">
          <Disclosure.Button
            className={`${
              basePath === "/services"
                ? activeNavItemStyle
                : inactiveNavItemStyle
            } mb-6 flex mx-auto cursor-pointer items-center`}
          >
            <span className="text-center text-xl font-bold text-black">
              {title}
            </span>
            <div className="flex items-center justify-center p-[2px] pl-3">
              <Image
                src={arrowIcon}
                alt="open submenu arrow"
                className={`duration-75 ${
                  open ? "rotate-180 origin-center duration-75" : ""
                }`}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 mb-6">
            <ul className="bg-beige px-4 w-full">
              {subMenu.map(({ title: subMenuTitle, href }) => {
                return (
                  <li
                    key={subMenuTitle}
                    className="py-4 text-center text-xl font-bold text-black cursor-pointer"
                  >
                    <Link prefetch={false} href={href}>
                      <span>{subMenuTitle}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

const MobileMenu = ({ show, basePath }) => {
  return (
    <Transition
      show={show}
      as="div"
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="min-h-screen min-w-full bottom-0 left-0">
        <nav className="my-10">
          <ul className="flex flex-col items-center">
            {HEADER_NAV.map((item) => {
              return item?.subMenu != null ? (
                <MobileNavItemWithSubmenu
                  {...item}
                  key={item.title}
                  basePath={basePath}
                />
              ) : (
                <MobileNavItem {...item} key={item.title} basePath={basePath} />
              );
            })}
            <li
              className={`mb-6 text-center text-xl font-bold text-black cursor-pointer ${inactiveNavItemStyle}`}
            >
              <Link prefetch={false} href="/app-cost-calculator">
                Estimate App Cost
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  );
};

export default MobileMenu;
