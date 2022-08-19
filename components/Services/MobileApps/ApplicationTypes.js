import React from "react";
import Image from "next/image";

// Images
import iosApp from "../../../public/ios-app.svg";
import androidApp from "../../../public/android-app.svg";

const ApplicationTypes = () => {
  return (
    <section className="py-28 bg-dots bg-no-repeat bg-[center_right]">
      <div className="container">
        <h2 className="text-[40px] font-bold leading-[50px] text-center text-light-black mt-9">
          We build application for Android & IOS
        </h2>

        <div className="mt-9 flex gap-10 justify-center text-center">
          <div className="max-w-[368px]">
            <Image src={iosApp} alt="iOS app mockup" />
            <h3 className="text-[32px] font-bold leading-[40px]">
              Fully functional applications for IOS
            </h3>
          </div>
          <div className="max-w-[368px]">
            <Image src={androidApp} alt="android app mockup" />
            <h3 className="text-[32px] font-bold leading-[40px]">
              Complex applications for Android
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTypes;
