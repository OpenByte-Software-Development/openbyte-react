import React from "react";
import { Form, Formik, Field } from "formik";
import api from "../../lib/api";
import Link from "next/link";
import { toast } from "react-toastify";

const HorizontalLine = () => (
  <div className="my-6 h-[2px] w-full bg-orange bg-opacity-20"></div>
);

const formInitialValues = {
  conditionsAgree: false,
  name: "",
  email: "",
  linkedin: "",
  message: "",
};

const ContactForm = () => {
  const formSubmitHandle = async (values, { resetForm }) => {
    const response = await api.contact(values);

    if (response.status === 201) {
      toast.success(
        "Thank you for your message! We will contact you as soon as possible."
      );

      resetForm();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="p-8 border-2 border-light-black rounded-[10px] mx-auto bg-white lg:mt-14 mt-[72px]">
      <Formik initialValues={formInitialValues} onSubmit={formSubmitHandle}>
        <Form>
          <div>
            <h3 className="lg:text-left text-2xl text-black font-bold">
              Personal info
            </h3>
            <HorizontalLine />
          </div>

          <div>
            <div className="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 grid-cols-1 lg:gap-8 gap-6">
              <div>
                <label htmlFor="name" className="text-black font-bold text-xs">
                  NAME<span className="text-orange text-lg">*</span>
                </label>
                <Field
                  id="name"
                  name="name"
                  required
                  placeholder="Type something here"
                  className="mt-4 py-4 px-4 text-black bg-white rounded-[10px] border-[1.5px] border-pale-orange focus:outline-none focus:border-orange w-full lg:w-auto"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-black font-bold text-xs">
                  EMAIL<span className="text-orange text-lg">*</span>
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com "
                  className="mt-4 py-[16px] px-4 rounded-[10px] bg-white border-[1.5px] text-black focus:ring-0 focus:border-[1.5px] border-pale-orange focus:border-orange w-full lg:w-auto"
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="text-black font-bold text-xs"
                >
                  PERSONAL LINKEDIN UL
                  <span className="text-orange text-lg"></span>
                </label>
                <Field
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="Type something here"
                  className="mt-3 py-[16px] px-4 rounded-[10px] bg-white border-[1.5px] text-black focus:ring-0 focus:border-[1.5px] border-pale-orange focus:border-orange w-full lg:w-auto"
                />
              </div>
            </div>
          </div>
          <HorizontalLine />

          <div className="mt-10">
            <div className="flex flex-col">
              <label htmlFor="message" className="text-black font-bold text-lg">
                Tell us about your product plans
              </label>

              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Please include the core problem or struggle you want to solve, the audience you target, and describe the solution hypotheses."
                className="resize-none mt-3 py-[16px] px-4 rounded-[10px] bg-white border-[1.5px] text-black focus:ring-0 focus:border-[1.5px] border-pale-orange focus:border-orange min-h-[160px]"
              />
            </div>
          </div>

          <div className="mt-8">
            <label>
              <div className="flex items-start">
                <Field
                  required
                  type="checkbox"
                  name="conditionsAgree"
                  className="mr-4 mt-1 rounded-[4px] checked:bg-checkbox-icon checked:bg-orange bg-center checked:bg-[length:10px_10px] border-2 w-[18px] h-[18px] focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:ring-offset-0"
                />
                <span className="block">
                  I consent that OpenByte can process my personal data for the
                  purpose of making me an offer for their services.
                  <Link prefetch={false} href="/privacy-and-policy">
                    <a className="text-orange"> Read our Privacy Policy</a>
                  </Link>
                  .
                </span>
              </div>
            </label>
          </div>

          <button
            className="p-[18px] bg-orange text-white text-base rounded-full font-extrabold w-full mt-10"
            type="submit"
          >
            Send Message
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
