import ContactForm from "./ContactForm";

const ContactUsWrapper = () => {
  return (
    <section className="bg-beige">
      <div>
        <div className="container mx-auto"> 
          <div className="py-28 max-w-[746px] mx-auto">
            <div className="text-center">
              <h2 className="text-[56px] font-bold leading-[70px]">
                Let’s talk
              </h2>
              <p className="text-lg text-darkGray">
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
