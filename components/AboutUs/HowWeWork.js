import React from "react";
import Link from "next/link";

const HowWeWork = () => {
  return (
    <section className="bg-how-we-work bg-top bg-[length:200%] bg-no-repeat lg:pt-[150px] pt-[50px]">
      <div className="bg-beige">
        <div className="container mx-auto bg-how-we-work-buddy bg-[center_bottom_0px] bg-no-repeat pb-[320px]">
          <div className="text-center text-white">
            <h2 className="lg:text-[40px] text-[24px] font-bold text-black">
              How we work
            </h2>

            <div className="mt-8 text-lg font-lato max-w-[770px] mx-auto text-darkGray">
              <p>
                We know that teamwork leads to great results that’s why our
                talents are open to working in teams following best practices
                and code standards.
              </p>
              <p className="mt-7">
                Every new project is inspected by our team leaders and before
                start working we have several meetings to ask the right
                questions in order to get the right answers.
              </p>
              <p className="mt-7">
                By having the right plan and deadlines we split the work in
                sprints by following agile methodologies like SCRUM and
                delivering with confidence the product that our customers expect
                to get.
              </p>
              <p className="mt-7">
                We constantly show results at the end of each sprint to get
                approval from our customers that we’re moving in the right
                direction.
              </p>
              <p className="mt-7">
                If you are not convinced enough then you can try a small project
                with us.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <button className="bg-orange mt-3 text-white text-base rounded-full py-[18px] lg:px-6 px-10 font-extrabold min-w-[250px] w-auto">
                Become Member
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
