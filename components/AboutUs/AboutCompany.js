import React from "react";

const AboutCompany = () => {
  return (
    <section className="bg-light-black skew-y-[-4deg] lg:py-24 lg:my-28 py-20 my-16">
      <div className="container mx-auto skew-y-[4deg]">
        <div className="text-center text-white">
          <h2 className="lg:text-4xl text-2xl font-bold">About company</h2>

          <div className="mt-8 text-lg font-lato max-w-[770px] mx-auto">
            <p>
              We are a company that believes in people and trust each other,
              we’re not about processes but about respect and people, also we
              believe that transparency leads to trust and long-term
              collaboration with our customers.
            </p>
            <p className="mt-7">
              We know that is hard to find reliable partners that’s why we build
              long-term committed relationships with our current customers.
            </p>
            <p className="mt-7">
              Our focus is quality over quantity that’s why we choose only the
              best talents to do their best work. We have great experience in
              working with different industries and have an awesome portfolio of
              great products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
