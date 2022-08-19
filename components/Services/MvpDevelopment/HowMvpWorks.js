import React from "react";
import Image from "next/image";

// Images
import howMvpWorks from "../../../public/how-mvp-work.svg";

const HowMvpWorks = () => {
  return (
    <section className="bg-light-black py-28">
      <div className="container text-center">
        <h2 className="text-[40px] font-bold leading-[50px] text-center text-white">
          Advantages to build an MVP
        </h2>
        <p className="max-w-[766px] mx-auto mt-6 text-lightGray text-[22px]">
          {`
            MVP is considered a "minimum viable product with the intent to collect
            as much as possible validated learnings from first customers".
          `}
        </p>

        <div className="mt-[73px]">
          <Image src={howMvpWorks} alt="MVP evolution" />
        </div>
      </div>
    </section>
  );
};

export default HowMvpWorks;
