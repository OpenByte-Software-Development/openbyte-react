import ContactForm from "./ContactForm";
import FormBuddy from "./FormBuddy";
import FormBuddyMobile from "./FormBuddyMobile";

const ContactUsWrapper = () => {
  return (
    <section className="bg-beige">
      <div>
        <div className="container mx-auto">
          <div className="lg:py-28 py-14 max-w-[746px] mx-auto">
            <div className="text-center">
              <h2 className="lg:text-6xl text-3xl font-bold">Let’s talk</h2>
              <p className="lg:text-lg text-lg text-darkGray mt-[9px]">
                We’re here to help you choose the best model that fits you and
                your project. We can help you choose the best tech stack for
                your project at a good price and reduce unnecessary costs.
              </p>
            </div>
            <div className="relative">
              <ContactForm />
              <FormBuddy />
              <FormBuddyMobile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsWrapper;
