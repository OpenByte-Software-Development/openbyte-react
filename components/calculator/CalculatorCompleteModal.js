import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ContactFormWithLinkedInCta from "../cta/ContactFormWithLinkedInCta";

const CalculatorCompleteModal = ({ showModal, setShowModal, options }) => {
  return (
    <Transition show={showModal} as={Fragment}>
      <Dialog
        open={showModal}
        onClose={() => setShowModal(!showModal)}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-light-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center lg:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden lg:rounded-2xl lg:p-6 text-left align-middle transition-all">
                <Dialog.Description as="div">
                  <div className="relative max-w-[1184px] mx-auto">
                    <ContactFormWithLinkedInCta
                      title="We will reply ASAP"
                      buttonText="Send Submission"
                      options={options}
                      setShowModal={setShowModal}
                    />
                    <div
                      className="absolute top-8 right-8 cursor-pointer"
                      onClick={() => setShowModal(false)}
                    >
                      <svg viewBox="0 0 28 28" width="28" height="28">
                        <path
                          d="M14 14L26 26M14 14L2 26M14 14L26 2M14 14L2 2"
                          stroke="white"
                        />
                      </svg>
                    </div>
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CalculatorCompleteModal;
