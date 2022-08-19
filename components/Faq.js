import React from "react";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import BulletPoints from "./BulletPoints";

// Images
import arrowDown from "../public/icons/arrow.svg";

const FaqItem = ({ question, answer, bullets }) => {
  return (
    <Disclosure
      className=" w-full max-w-[800px] border-2 border-black rounded-2xl relative"
      as="div"
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`relative p-8 bg-opacity-0 cursor-pointer bg-transparent ${
              open ? "border-b-2 border-black" : ""
            }`}
            as="div"
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold leading-7">{question}</span>
              <Image
                src={arrowDown}
                alt="open disclosure button"
                className={`duration-75 ${
                  open ? "rotate-180 origin-center duration-75" : ""
                }`}
              />
            </div>
            <div className="bg-yellow absolute -top-2 -right-2 rounded-2xl min-w-[100%] min-h-[100%] -z-10"></div>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              className="px-8 py-6 text-lg text-gray font-lato"
              as="div"
            >
              {answer}
              {Array.isArray(bullets) && <BulletPoints bullets={bullets} />}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const Faq = ({ faqs }) => {
  return (
    <section className="py-28">
      <div className="container mx-auto lg:mt-36 my-14">
        <h2 className="font-bold text-4xl text-center">FAQ</h2>
        <div className="flex flex-col items-center gap-8 mt-7">
          {faqs.map((faq, index) => {
            return <FaqItem {...faq} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
