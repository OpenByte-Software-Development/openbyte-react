import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition, Disclosure } from "@headlessui/react";
import { HEADER_NAV } from "../../../lib/constants";

// Images
import arrowIcon from "../../../public/icons/arrow.svg";

const MobileNavItem = ({ title, href }) => (
  <li className="py-4 text-center text-xl font-bold text-black">
    <Link href={href}>{title}</Link>
  </li>
);

const MobileNavItemWithSubmenu = ({ title, subMenu, showMenu }) => {
  return (
    <Disclosure as="li">
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex mx-auto">
            <span className=" text-center text-xl font-bold text-black">
              {title}
            </span>
            <div className="flex items-center p-[2px] pl-3">
              <Image
                src={arrowIcon}
                alt="open submenu arrow"
                className={`duration-75 ${
                  open ? "rotate-180 origin-center duration-75" : ""
                }`}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <ul className="bg-beige px-4">
              {subMenu.map(({ title: subMenuTitle, href }) => {
                return (
                  <li
                    key={subMenuTitle}
                    className="py-4 text-center text-xl font-bold text-black"
                  >
                    <Link href={href}>
                      <span>{subMenuTitle}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const MobileMenu = ({ show }) => {
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
      <div className="px-4 min-h-screen min-w-full bottom-0 left-0">
        <nav className="my-10">
          <ul>
            {HEADER_NAV.map((item) => {
              return item?.subMenu != null ? (
                <MobileNavItemWithSubmenu {...item} key={item.title} />
              ) : (
                <MobileNavItem {...item} key={item.title} />
              );
            })}
            <li className="py-4 text-center text-xl font-bold text-black">
              <Link href="/calculator">Estimate App Cost</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  );
};

export default MobileMenu;
