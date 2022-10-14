import React from "react";
import Image from "next/image";
import { Form, Formik, Field } from "formik";
import { toast } from "react-toastify";
import api from "../../lib/api";

// Images
import arrowRight from "../../public/icons/arrow-right.svg";

const DEFAULT_TITLE = "Want to work with us?";

const formInitialValues = {
  email: "",
  name: "",
};

const ContactFormCta = ({ title = DEFAULT_TITLE }) => {
  const formSubmitHandler = async (values, { resetForm }) => {
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
    <section className="bg-orange lg:bg-opacity-0">
      <div className="bg-cta-background-mobile bg-right-bottom bg-no-repeat z-20 lg:bg-none">
        <div className="container lg:mx-auto lg:bg-orange bg-none lg:rounded-[30px]">
          <div className="lg:bg-cta-background bg-[right_48px_bottom_0] lg:py-[80px] py-8 lg:px-[96px] bg-no-repeat">
            <h2 className="text-white font-bold lg:text-6xl text-4xl max-w-[330px] lg:max-w-[600px]">
              {title}
            </h2>

            <div>
              <div className="mt-8 max-w-[220px]">
                <Formik
                  initialValues={formInitialValues}
                  onSubmit={formSubmitHandler}
                >
                  <Form>
                    <div className="flex gap-4 lg:flex-row flex-col">
                      <Field
                        name="name"
                        id="name"
                        required
                        placeholder="Your Name"
                        className="rounded-[10px] px-4 py-3 text-black"
                      />
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        required
                        placeholder="Your Email"
                        className="rounded-[10px] px-4 py-3 text-black border-none focus:border-none outline-none focus:outline-none focus:ring-0"
                      />
                    </div>

                    <div className="mt-[50px]">
                      <button
                        type="submit"
                        className="text-white text-base font-extrabold"
                      >
                        <div className="flex items-center gap-[10px]">
                          <span>Contact Us</span>
                          <Image
                            src={arrowRight}
                            alt="arrow icon"
                            height={arrowRight.height}
                            width={arrowRight.width}
                          />
                        </div>
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormCta;
