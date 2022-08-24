import ContactForm from "./ContactForm";

const ContactUsWrapper = () => {
  return (
    <section className="bg-beige">
      <div>
        <div className="container mx-auto">
          <div className="lg:py-28 py-14 max-w-[746px] mx-auto">
            <div className="text-center">
              <h2 className="lg:text-[56px] text-[32px] font-bold leading-[70px]">
                Let’s talk
              </h2>
              <p className="lg:text-lg text-base text-darkGray">
                We’re here to help you choose the best model that fits you and
                your project. We can help you choose the best tech stack for
                your project at a good price and reduce unnecessary costs.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsWrapper;
