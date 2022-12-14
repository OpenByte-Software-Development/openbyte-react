import React from "react";
import Image from "next/image";

// Images
import workflow1 from "../../public/workflow-1.svg";
import workflow2 from "../../public/workflow-2.svg";
import workflow3 from "../../public/workflow-3.svg";

const OurWorkflow = () => {
  return (
    <section className="container mx-auto pb-28 pt-[60px]">
      <h2 className="lg:text-6xl text-3xl text-center lg:text-left font-bold">
        Our workflow
      </h2>

      <div className="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 grid-cols-1 mt-10 text-center gap-16 lg:bg-workflow-section bg-no-repeat bg-[right_top_-15px]">
        <div>
          <div className="max-w-[64px] lg:max-w-none mx-auto">
            <Image
              src={workflow1}
              alt="outsourcing icon"
              height={workflow1.height}
              width={workflow1.width}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-3xl text-light-black font-bold leading-10">
              Tell us your business requirements
            </h3>
            <p className="text-lg text-gray leading-9 mt-4 font-lato">
              Talk to our advisor about your exact needs, product specifics, and
              team dynamics. The more we know at this step, the better the
              future match will be.
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-[64px] lg:max-w-none mx-auto">
            <Image
              src={workflow2}
              alt="Agile teams icon"
              height={workflow2.height}
              width={workflow2.width}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-3xl text-light-black font-bold leading-10">
              Get in short period an estimation
            </h3>
            <p className="text-lg text-gray text leading-9 mt-4 font-lato">
              We will work to provide an estimation on time and money with
              maximum details for each milestone.
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-[64px] lg:max-w-none mx-auto">
            <Image
              src={workflow3}
              alt="Agile teams icon"
              height={workflow3.height}
              width={workflow3.width}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-3xl text-light-black font-bold leading-10">
              Get the right team
            </h3>
            <p className="text-lg text-gray leading-9 mt-4 font-lato">
              We select the candidates that match your project requirements and
              have the best experience in this field to help you build the right
              product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkflow;
