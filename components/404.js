import React from "react";
import Image from "next/image";
import Link from "next/link";

//Images
import buddy404 from "../public/404.png";

const NotFound = () => {
  return (
    <section className="lg:pb-[120px] pb-10">
      <div className="relative bg-beige">
        <div>
          <div className="pt-[80px] container">
            <h2 className="lg:text-4xl text-3xl font-bold text-center text-black">
              Oops... something went wrong
            </h2>

            <div className="mx-auto w-auto flex justify-center mt-14">
              <Image
                src={buddy404}
                height={buddy404.height}
                width={buddy404.width}
                alt="Oops... something went wrong"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0">
            <svg viewBox="0 0 1920 154" height="100%" width="100vw">
              <path
                d="M0 0V770.064H1920V2.48674C1820.52 46.8925 1690 82.5368 1522.88 109.42C1339.75 138.878 1149.29 153.608 951.512 153.608C665.827 153.608 416.768 126.253 204.336 69.4399C121.779 48.2215 54.6861 24.7822 0 0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[64px]">
        <Link prefetch={false} href="/">
          <a>
            <button className="bg-orange text-white text-base rounded-3xl py-3.5 px-8 font-extrabold">
              Go to Homepage
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
