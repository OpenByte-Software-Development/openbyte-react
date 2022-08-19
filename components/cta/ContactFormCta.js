import React from "react";
import Image from "next/image";

// Images
import arrowRight from "../../public/icons/arrow-right.svg";

const DEFAULT_TITLE = "Want to work with us?";

const ContactFormCta = ({ title = DEFAULT_TITLE }) => {
  return (
    <section className="bg-orange lg:bg-opacity-0">
      <div className="bg-cta-background-mobile bg-right-bottom bg-no-repeat z-20 lg:bg-none">
        <div className="container lg:mx-auto lg:bg-orange bg-none lg:rounded-[30px]">
          <div className="lg:bg-cta-background bg-[right_48px_bottom_0] lg:py-[80px] py-8 lg:px-[96px] bg-no-repeat">
            <h2 className="text-white font-bold lg:leading-[70px] leading-[50px] lg:text-[56px] text-[40px] max-w-[330px] lg:max-w-none">
              {title}
            </h2>

            <div>
              <div className="mt-8 max-w-[220px]">
                <form>
                  <div className="flex gap-4 lg:flex-row flex-col">
                    <input
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="rounded-[10px] px-4 py-3 text-darkGray"
                    />
                    <input
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="rounded-[10px] px-4 py-3 text-darkGray"
                    />
                  </div>

                  <div className="mt-[50px]">
                    <button
                      role="submit"
                      className="text-white text-base font-extrabold"
                    >
                      <div className="flex items-center gap-[10px]">
                        <span>Contact Us</span>
                        <Image src={arrowRight} alt="arrow icon" />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormCta;
