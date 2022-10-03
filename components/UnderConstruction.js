import React from "react";
import Image from "next/image";
import Link from "next/link";

//Images
import underConstruction from "../public/under-construction.svg";

const UnderConstruction = () => {
  return (
    <div className="lg:pb-52 pb-10">
      <div className="bg-beige">
        <div className="pt-28 container">
          <h2 className="lg:text-[52px] text-[32px] font-bold text-center text-black">
            This page is under construction
          </h2>

          <div className="mx-auto w-auto flex justify-center mt-14">
            <Image
              src={underConstruction}
              alt="This page is under construction"
            />
          </div>

          <div className="flex justify-center mt-16">
            <Link prefetch={false}  href="/">
              <a>
                <button className="bg-orange text-white text-base rounded-3xl py-3.5 px-8 font-extrabold">
                  Go to Homepage
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 1920 177">
        <path
          d="M2011.5 -721.299L2025.5 -31.445C2003.52 -16.7065 1981.55 -1.96787 1952.25 12.7707C1849.69 63.3028 1710.51 103.307 1527.38 132.784C1344.25 162.261 1153.79 177 956.012 177C670.327 177 421.268 149.628 208.836 92.7798C69.6557 56.9862 -39.5727 14.8762 -105.5 -29.3394V-721.299H2011.5Z"
          fill="#FFFAF7"
        />
      </svg>
    </div>
  );
};

export default UnderConstruction;
