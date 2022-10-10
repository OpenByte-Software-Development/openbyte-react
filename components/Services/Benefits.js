import React from "react";
import { Bullet } from "../BulletPoints";

const Benefits = () => {
  return (
    <section>
      <div className="bg-light-black lg:pt-24 lg:pb-12 py-16">
        <div className="container text-white">
          <h2 className="lg:text-4xl text-3xl font-bold leading-[50px] text-center">
            Our benefits
          </h2>
          <div className="mt-12 text-white">
            <div className="lg:flex">
              <Bullet
                as="div"
                className="lg:ml-[170px] mb-4 lg:mb-0"
                key={1}
                light={true}
                text={"All our talents know English well (B2)"}
              />
              <Bullet
                as="div"
                className="lg:ml-[134px] mb-4 lg:mb-0"
                key={2}
                light={true}
                text={"We’re open, flexible, and adaptive"}
              />
            </div>
            <div className="lg:flex lg:mt-8">
              <Bullet
                as="div"
                className="lg:ml-[85px] mb-4 lg:mb-0"
                key={3}
                light={true}
                text={"We’re in the EU timezone "}
              />
              <Bullet
                as="div"
                className="lg:ml-[182px] mb-4 lg:mb-0"
                key={4}
                light={true}
                text={
                  "We’re continually asking questions (we follow Mental Models)"
                }
              />
            </div>
            <div className="lg:mt-8 lg:flex">
              <Bullet
                as="div"
                className="lg:ml-[175px] mb-4 lg:mb-0"
                key={5}
                light={true}
                text={"Our work is transparent and predictable"}
              />
              <Bullet
                as="div"
                className="lg:ml-[71px] mb-4 lg:mb-0"
                key={6}
                light={true}
                text={
                  "We follow quality standards and aim for wide tech certification"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1920 84">
        <path
          d="M0 4C0 4 387.5 84 960 84C1532.5 84 1920 4 1920 4V-381.5H960H0V4Z"
          fill="#323232"
        />
      </svg>
    </section>
  );
};

export default Benefits;
