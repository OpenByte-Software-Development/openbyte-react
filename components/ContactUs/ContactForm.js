import React from "react";
import { Form, Formik, Field } from "formik";
import { api } from "../../lib/api";
import Link from "next/link";

const HorizontalLine = () => (
  <div className="my-6 h-[2px] w-full bg-orange bg-opacity-20"></div>
);

const formInitialValues = {
  conditionsAgree: false,
  // companySize: "",
  // budget: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  // country: "",
  linkedin: "",
  description: "",
};

const ContactForm = () => {
  const formSubmitHandle = async (values) => {
    const submitStatus = await api.contact.contactForm(values);

    if (submitStatus) console.log("Success");
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
                <label
                  htmlFor="firstName"
                  className="text-black font-bold text-[10px]"
                >
                  FIRST NAME<span className="text-orange text-lg">*</span>
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="Type something here"
                  className="mt-4 py-4 px-4 text-black bg-white rounded-[10px] border-[1.5px] border-pale-orange focus:outline-none focus:border-orange w-full lg:w-auto"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-black font-bold text-[10px]"
                >
                  LAST NAME<span className="text-orange text-lg">*</span>
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Type something here"
                  className="mt-4 py-[16px] px-4 text-black bg-white rounded-[10px] border-[1.5px] border-pale-orange focus:outline-none focus:border-orange w-full lg:w-auto"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-black font-bold text-[10px]"
                >
                  EMAIL<span className="text-orange text-lg">*</span>
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com "
                  className="mt-4 py-[16px] px-4 rounded-[10px] bg-white border-[1.5px] text-black focus:ring-0 focus:border-[1.5px] border-pale-orange focus:border-orange w-full lg:w-auto"
                />
              </div>
            </div>

            <div className="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 grid-cols-1 lg:gap-8 gap-6 mt-8 ">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="text-black font-bold text-[10px]"
                >
                  PHONE NUMBER
                </label>
                <Field
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Type something here"
                  className="mt-4 py-[16px] px-4 text-black bg-white rounded-[10px] border-[1.5px] border-pale-orange focus:outline-none focus:border-orange  w-full lg:w-auto"
                />
              </div>

              {/* <div>
                <label
                  htmlFor="country"
                  className="text-black font-bold text-[10px]"
                >
                  COUNTY<span className="text-orange text-lg">*</span>
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  placeholder="Select country"
                  className="mt-3 py-[16px] px-4 rounded-[10px] bg-white border-[1.5px] text-black focus:ring-0 focus:border-[1.5px] border-pale-orange focus:border-orange w-full bg-select-icon bg-[length:8px_8px] bg-[center_right_17px]"
                >
                  <option>Moldova, Republic of</option>
                  <option>Romania</option>
                </Field>
              </div> */}

              <div>
                <label
                  htmlFor="linkedin"
                  className="text-black font-bold text-[10px]"
                >
                  PERSONAL LINKEDIN UL
                  <span className="text-orange text-lg">*</span>
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

          {/* <div>
            <h3 className="lg:text-left text-2xl text-black font-bold">
              Project info
            </h3>
            <HorizontalLine />
          </div> */}

          {/* <div className="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-2 grid-cols-1 gap-6">
            <div>
              <div
                id="my-radio-group"
                className="text-lg font-semibold text-black"
              >
                Tell us more about your company
                <span className="text-orange">*</span>
              </div>
              <div
                role="group"
                aria-labelledby="company-group"
                className="mt-[20px]"
              >
                <label className="block font-bold text-[14px] leading-[18px]">
                  <Field
                    type="radio"
                    name="companySize"
                    value="startup"
                    className="mr-2 border-orange focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:border-orange checked:bg-radio-icon bg-center checked:bg-[length:10px_10px] w-[18px] h-[18px]"
                  />
                  {"I'm startup"}
                </label>
                <label className="block font-bold text-[14px] leading-[18px] mt-4">
                  <Field
                    type="radio"
                    name="companySize"
                    value="mediumBusiness"
                    className="mr-2 border-orange focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:border-orange checked:bg-radio-icon bg-center checked:bg-[length:10px_10px] w-[18px] h-[18px]"
                  />
                  {"I'm a small or medium business"}
                </label>
                <label className="block font-bold text-[14px] leading-[18px] mt-4">
                  <Field
                    type="radio"
                    name="companySize"
                    value="other"
                    className="mr-2 border-orange focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:border-orange checked:bg-radio-icon bg-center checked:bg-[length:10px_10px] w-[18px] h-[18px]"
                  />
                  {"Other variant"}
                </label>
              </div>
            </div>
            <div>
              <div
                id="my-radio-group"
                className="text-lg font-semibold text-black"
              >
                What is your current available budget?
                <span className="text-orange">*</span>
              </div>
              <div
                role="group"
                aria-labelledby="budged-radio"
                className="mt-[20px]"
              >
                <label className="block font-bold text-[14px] leading-[18px]">
                  <Field
                    type="radio"
                    name="budget"
                    value="not_fixed"
                    className="mr-2 border-orange focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:border-orange checked:bg-radio-icon bg-center checked:bg-[length:10px_10px] w-[18px] h-[18px]"
                  />
                  Budget not secured yet
                </label>
                <label className="block font-bold text-[14px] leading-[18px] mt-4">
                  <Field
                    type="radio"
                    name="budget"
                    value="under_30k"
                    className="mr-2 border-orange focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:border-orange checked:bg-radio-icon bg-center checked:bg-[length:10px_10px] w-[18px] h-[18px]"
                  />
                  Under $30,000
                </label>
                <label className="block font-bold text-[14px] leading-[18px] mt-4">
                  <Field
                    type="radio"
                    name="budget"
                    value="other"
                    className="mr-2 border-orange focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:border-orange checked:bg-radio-icon bg-center checked:bg-[length:10px_10px] w-[18px] h-[18px]"
                  />
                  {"Other variant"}
                </label>
              </div>
            </div>
          </div> */}

          <div className="mt-10">
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-black font-bold text-lg"
              >
                Tell us about your product plans
                <span className="text-orange">*</span>
              </label>

              <Field
                id="description"
                name="description"
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
                  type="checkbox"
                  name="conditionsAgree"
                  className="mr-4 mt-1 rounded-[4px] checked:bg-checkbox-icon checked:bg-orange bg-center checked:bg-[length:10px_10px] border-2 w-[18px] h-[18px] focus:ring-0 checked:ring-0 focus:ring-offset-0 checked:ring-offset-0"
                />
                <span className="block">
                  I consent that OpenByte can process my personal data for the
                  purpose of making me an offer for their services.
                  <Link href="/privacy-and-policy">
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
