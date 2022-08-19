import React from "react";
import { Bullet } from "../BulletPoints";

const Benefits = () => {
  return (
    <section>
      <div className="bg-light-black pt-24 pb-12">
        <div className="container text-white">
          <h2 className="text-[40px] font-bold leading-[50px] text-center">
            Our benefits
          </h2>
          <div className="mt-12 text-white">
            <div className="flex">
              <Bullet
                as="div"
                className="ml-[170px]"
                key={1}
                text={"All our talents know English well (B2)"}
              />
              <Bullet
                as="div"
                className="ml-[134px]"
                key={2}
                text={"We’re open, flexible, and adaptive"}
              />
            </div>
            <div className="flex mt-8">
              <Bullet
                as="div"
                className="ml-[85px]"
                key={3}
                text={"We’re in the EU timezone "}
              />
              <Bullet
                as="div"
                className="ml-[182px]"
                key={4}
                text={
                  "We’re continually asking questions (we follow Mental Models)"
                }
              />
            </div>
            <div className="mt-8 flex">
              <Bullet
                as="div"
                className="ml-[175px]"
                key={5}
                text={"Our work is transparent and predictable"}
              />
              <Bullet
                as="div"
                className="ml-[71px]"
                key={6}
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
