import React from "react";
import Image from "next/image";
import { Form, Formik, Field } from "formik";
import api from "../../lib/api";
import { toast } from "react-toastify";

// Images
import arrowRight from "../../public/icons/arrow-right.svg";

const DEFAULT_TITLE = "Want to work with us?";

const formInitialValues = {
  email: "",
  name: "",
  linkedIn: "",
};

const ContactFormWithLinkedInCta = ({
  title = DEFAULT_TITLE,
  buttonText = "Contact Us",
  options,
  setShowModal,
}) => {
  const formSubmitHandler = async (values, { resetForm }) => {
    const response = await api.contact({ ...values, options });

    if (response.status === 201) {
      resetForm();
      setShowModal(false);
      toast.success("Your request was submited! We will contact you ASAP");
    } else {
      toast.error("Failed to submit data! Please, try again later");
    }
  };

  return (
    <section className="bg-orange lg:bg-opacity-0">
      <div className="bg-cta-background-mobile bg-right-bottom bg-no-repeat z-20 lg:bg-none">
        <div className="container lg:mx-auto lg:bg-orange bg-none lg:rounded-[30px]">
          <div className="lg:bg-cta-background bg-[right_48px_bottom_0] lg:py-[80px] py-8 lg:px-[96px] bg-no-repeat">
            <h2 className="text-white font-bold lg:text-6xl marker:text-4xl max-w-[330px] lg:max-w-[600px]">
              {title}
            </h2>

            <div>
              <div className="mt-8 max-w-[220px]">
                <Formik
                  initialValues={formInitialValues}
                  onSubmit={formSubmitHandler}
                >
                  <Form>
                    <div className="flex gap-4 flex-col">
                      <Field
                        name="name"
                        id="name"
                        required
                        placeholder="Your Name"
                        className="rounded-[10px] px-4 py-3 text-darkGray"
                      />
                      <Field
                        name="email"
                        id="email"
                        required
                        placeholder="Your Email"
                        className="rounded-[10px] px-4 py-3 text-darkGray"
                      />
                      <Field
                        name="linkedIn"
                        id="linkedIn"
                        placeholder="LinkedIn URL"
                        className="rounded-[10px] px-4 py-3 text-darkGray"
                      />
                    </div>

                    <div className="mt-[50px]">
                      <button
                        type="submit"
                        className="text-white text-base font-extrabold"
                      >
                        <div className="flex items-center gap-[10px]">
                          <span>{buttonText}</span>
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

export default ContactFormWithLinkedInCta;
