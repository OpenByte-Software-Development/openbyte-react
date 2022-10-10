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
    <section className="bg-light-black bg-building-experience-background bg-no-repeat lg:bg-[top_48px_right_70px] bg-[top_10px_right_5px] bg-[length:45px_45px] lg:bg-[length:auto_auto] lg:py-28 py-14">
      <div className="container text-white">
        <h2 className="lg:text-[50px] text-3xl font-bold leading-[50px] text-center">
          We have experience in building
        </h2>
        <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-16 lg:text-left text-center mt-11">
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
