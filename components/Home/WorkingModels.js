import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import workingModels1 from "../../public/working-models-1.svg";
import workingModels2 from "../../public/working-models-2.svg";
import workingModels3 from "../../public/working-models-3.svg";

const WorkingModels = () => {
  return (
    <section className="mx-auto lg:py-20 py-14 bg-beige">
      <div className="container mx-auto">
        <h2 className="lg:text-[56px] text-[32px] text-center lg:text-left font-bold text-light-black">
          Working models
        </h2>

        <div className="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 grid-cols-1 mt-10 text-center gap-16">
          <div>
            <div className="max-w-[152px] lg:max-w-none mx-auto">
              <Image
                src={workingModels1}
                alt="Continuous Development & Agile"
              />
            </div>

            <div className="mt-6">
              <h3 className="lg:text-[32px] text-[22px] text-light-black font-bold leading-10">
                Continuous Development & Agile
              </h3>
              <p className="text-[18px] text-gray leading-9 mt-4">
                We will work to provide an estimation on time and money with
                maximum details for each milestone.
              </p>
            </div>
          </div>

          <div>
            <div className="max-w-[152px] lg:max-w-none mx-auto">
              <Image src={workingModels2} alt="Fixed price & Waterfall" />
            </div>

            <div className="mt-6">
              <h3 className="lg:text-[32px] text-[22px] text-light-black font-bold leading-10">
                Fixed price & <br /> Waterfall
              </h3>
              <p className="text-[18px] text-gray text leading-9 mt-4">
                We will work to provide an estimation on time and money with
                maximum details for each milestone.
              </p>
            </div>
          </div>

          <div>
            <div className="max-w-[152px] lg:max-w-none mx-auto">
              <Image src={workingModels3} alt="Support & Monthly Package" />
            </div>

            <div className="mt-6">
              <h3 className="lg:text-[32px] text-[22px] text-light-black font-bold leading-10">
                Support & Monthly Package
              </h3>
              <p className="text-[18px] text-gray leading-9 mt-4">
                We will work to provide an estimation on time and money with
                maximum details for each milestone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingModels;
