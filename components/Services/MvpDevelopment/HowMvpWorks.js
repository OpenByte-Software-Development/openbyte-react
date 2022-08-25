import React from "react";
import Image from "next/image";

// Images
import howMvpWorks from "../../../public/how-mvp-work.svg";

const HowMvpWorks = () => {
  return (
    <section className="bg-light-black lg:py-28 py-14">
      <div className="container text-center">
        <h2 className="lg:text-[40px] text-[32px] font-bold leading-[50px] text-center text-white">
          Advantages to build an MVP
        </h2>
        <p className="max-w-[766px] mx-auto lg:mt-6 mt-4 lg:text-[22px] text-base font-lato text-white">
          {`
            MVP is considered a "minimum viable product with the intent to collect
            as much as possible validated learnings from first customers".
          `}
        </p>

        <div className="lg:mt-[73px] mt-8">
          <Image src={howMvpWorks} alt="MVP evolution" />
        </div>
      </div>
    </section>
  );
};

export default HowMvpWorks;
