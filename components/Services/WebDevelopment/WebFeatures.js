import React from "react";
import Image from "next/image";
import BulletPoints from "../../BulletPoints";

// Images
import webFeature1 from "../../../public/web-features-1.svg";
import webFeature2 from "../../../public/web-features-2.svg";
import webFeature3 from "../../../public/web-features-3.svg";
import webFeature4 from "../../../public/web-features-4.svg";

const WEB_FEATURES = [
  {
    title: "Progressive Web Apps",
    description:
      "With PWA you can build native-app-like functionality that has the feel and UX similar to mobile apps - push notifications, last loading, full-screen user experience, and many more. Below are mentioned some of the main advantages of using PWA.",
    src: webFeature1,
    bullets: [
      "PWAs require no installation",
      "Don’t depend on the network state",
      "Users can pin PWAs to their Home screens",
      "PWAs are available to users even offline",
    ],
  },
  {
    title: "Single Page Applications",
    description:
      "Single Page Applications are much faster thanks to dynamic refreshing which means that only necessary content updates and no additional pages need to be reloaded or loaded during the use. Here are some of advantages by using SPA technology.",
    src: webFeature2,
    bullets: ["High speed of work", "Traffic optimization", "No page reloads"],
  },
  {
    title: "Dark Mode",
    description:
      "With dark mode you can simply improve user experience, by simply reading OS system appearance preferences. For the last years dark mode is in trending and statistics shows that it increase page reading by 170%.",
    src: webFeature3,
    bullets: null,
  },
  {
    title: "Responsive Design",
    description:
      "With Responsive Design we create content that adjusts smoothly to various screen sizes. By going responsive, you can have a great UX/UI and no need to create native mobile apps for Android/IOS.",
    src: webFeature4,
    bullets: null,
  },
];

const WebFeatures = () => {
  return (
    <section className="lg:mt-28 my-28">
      <div className="container mx-auto">
        <h2 className="max-w-[766px] lg:text-4xl text-3xl text-light-black font-bold text-center mx-auto">
          Web applications for any need, device, and platform
        </h2>

        <div className="lg:grid grid-rows-1 grid-cols-2 gap-x-16 gap-y-14 mt-11">
          {WEB_FEATURES.map(({ title, src, description, bullets }) => {
            return (
              <div
                className="grid grid-rows-1 grid-cols-12 gap-4 mt-8"
                key={title}
              >
                <div className="lg:col-span-2 col-span-3">
                  <Image src={src} alt={`${title} icon`} />
                </div>

                <div className="lg:col-span-10 col-span-9">
                  <h3 className="text-3xl text-light-black font-bold leading-10">
                    {title}
                  </h3>
                  <p className="text-[18px] text-gray leading-9  mt-4">
                    {description}
                  </p>
                  {Array.isArray(bullets) && <BulletPoints bullets={bullets} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebFeatures;
