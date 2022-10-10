import React from "react";
import Image from "next/image";

// Images
import iosApp from "../../../public/ios-app.svg";
import androidApp from "../../../public/android-app.svg";

const ApplicationTypes = () => {
  return (
    <section className="lg:py-28 py-14 lg:bg-dots bg-no-repeat bg-[center_right]">
      <div className="container">
        <h2 className="lg:text-4xl text-3xl font-bold leading-[50px] text-center text-light-black mt-9">
          We build application for Android & IOS
        </h2>

        <div className="mt-9 lg:flex gap-10 justify-center lg:text-center">
          <div className="max-w-[368px] lg:block flex flex-row items-center gap-8">
            <Image src={iosApp} alt="iOS app mockup" />
            <h3 className="lg:text-3xl text-xl font-bold leading-[40px]">
              Fully functional applications for IOS
            </h3>
          </div>
          <div className="max-w-[368px] lg:block flex flex-row items-center lg:mt-0 mt-10 gap-8">
            <Image src={androidApp} alt="android app mockup" />
            <h3 className="lg:text-3xl text-xl font-bold leading-[40px]">
              Complex applications for Android
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTypes;
