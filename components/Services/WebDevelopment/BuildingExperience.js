import React from "react";

const BUILDING_EXPERIENCE_COLUMNS = [
  {
    title: "Complex CRM/ERP software related projects",
    body: "Having a beautiful experience by building and adapting CRM/ERP systems to business needs we can build any features only limited by your imagination.",
  },
  {
    title: "Custom powerful BI tool for data visualization",
    body: "We can help you visualize your data by integrating all your company data in one place by using smart connectors that allows you to connect any data.",
  },
  {
    title: "HR related tools",
    body: "Having a large set of HR-related software products we can help you from building a simple payroll systems to tracking software systems.",
  },
];

const BuildingExperience = () => {
  return (
    <section className="bg-light-black bg-building-experience-background bg-no-repeat bg-[top_48px_right_70px] py-28">
      <div className="container text-white">
        <h2 className="text-[50px] font-bold leading-[50px] text-center">
          We have experience in building
        </h2>
        <div className="grid grid-rows-1 grid-cols-3 gap-16 text-left mt-11">
          {BUILDING_EXPERIENCE_COLUMNS.map(({ title, body }) => {
            return (
              <div key={title}>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-lg text-lightGray font-lato mt-4">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuildingExperience;
