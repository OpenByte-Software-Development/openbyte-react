import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Layout/index"));
import { PAGE_TITLES } from "../lib/constants";

const PointTitle = ({ children }) => {
  return <h3 className="text-lg">{children}</h3>;
};

const Paragraph = ({ children, className }) => {
  return <p className={`${className} my-8`}>{children}</p>;
};

const Bold = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};

const PrivacyAndPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.privacyPolicy}</title>
      </Head>
      <div className="py-36">
        <div className="container">
          <h2 className="font-bold text-center text-3xl">PRIVACY NOTICE</h2>
          <span className="block text-center mt-2">
            Last updated September 01, 2022
          </span>

          <div className="mt-6">
            <Paragraph>
              This privacy notice for ELITIV GROUP SRL (&quot;
              <Bold>Company</Bold>,&quot; &quot;<Bold>we</Bold>,&quot; &quot;
              <Bold>us</Bold>,&quot; or &quot;<Bold>our</Bold>&quot;), describes
              how and why we might collect, store, use, and/or share (&quot;
              <Bold>process</Bold>&quot;) your information when you use our
              services (&quot;<Bold>Services</Bold>&quot;), such as when you:
            </Paragraph>
            <ul className="my-8 list-disc ml-6">
              <li>
                Visit our website at{" "}
                <a
                  className="text-orange"
                  href="https://openbyte.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://openbyte.dev/
                </a>
                , or any website of ours that links to this privacy notice
              </li>
              <li className="mt-4">
                Engage with us in other related ways, including any sales,
                marketing, or events
              </li>
            </ul>
            <Paragraph>
              <Bold>Questions or concerns?</Bold> Reading this privacy notice
              will help you understand your privacy rights and choices. If you
              do not agree with our policies and practices, please do not use
              our Services. If you still have any questions or concerns, please
              contact us at{" "}
              <a className="text-orange" href="mailto: radu@openbyte.dev">
                radu@openbyte.dev
              </a>
              .
            </Paragraph>
            <h3 className="mb-8 mt-10">
              <Bold>SUMMARY OF KEY POINTS</Bold>
            </h3>
            <Paragraph className="italic">
              <Bold>
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our table
                of contents below to find the section you are looking for. You
                can also click here to go directly to our table of contents.
              </Bold>
            </Paragraph>
            <Paragraph>
              <Bold>What personal information do we process?</Bold> When you
              visit, use, or navigate our Services, we may process personal
              information depending on how you interact with ELITIV GROUP SRL
              and the Services, the choices you make, and the products and
              features you use. Click here to learn more.
            </Paragraph>
            <Paragraph>
              <Bold>Do we process any sensitive personal information?</Bold> We
              do not process sensitive personal information.
            </Paragraph>
            <Paragraph>
              <Bold>Do we receive any information from third parties?</Bold> We
              may receive information from public databases, marketing partners,
              social media platforms, and other outside sources. Click here to
              learn more.
            </Paragraph>
            <Paragraph>
              <Bold>How do we process your information?</Bold> We process your
              information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. Click here to learn more.
            </Paragraph>
            <Paragraph>
              <Bold>
                In what situations and with which parties do we share personal
                information?
              </Bold>{" "}
              We may share information in specific situations and with specific
              third parties. Click here to learn more.
            </Paragraph>

            <Paragraph>
              <Bold>How do we keep your information safe?</Bold> We have
              organizational and technical processes and procedures in place to
              protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Click here to learn more.
            </Paragraph>

            <Paragraph>
              <Bold>What are your rights?</Bold> Depending on where you are
              located geographically, the applicable privacy law may mean you
              have certain rights regarding your personal information. Click
              here to learn more.
            </Paragraph>

            <Paragraph>
              <Bold>How do you exercise your rights?</Bold> The easiest way to
              exercise your rights is by filling out our data subject request
              form available{" "}
              <a
                href="https://app.termly.io/notify/70495f9e-1aa3-4e5c-8c9f-7ee2e3012eee"
                target="_blank"
                rel="noreferrer"
                className="text-orange"
              >
                here
              </a>
              , or by contacting us. We will consider and act upon any request
              in accordance with applicable data protection laws.
            </Paragraph>

            <Paragraph>
              Want to learn more about what ELITIV GROUP SRL does with any
              information we collect? Click here to review the notice in full.
            </Paragraph>

            <h2>
              <Bold>TABLE OF CONTENTS</Bold>
            </h2>

            <ol className="list-decimal ml-4 mt-4">
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-1">
                  <a className="text-orange">WHAT INFORMATION DO WE COLLECT?</a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-2">
                  <a className="text-orange">
                    HOW DO WE PROCESS YOUR INFORMATION?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-3">
                  <a className="text-orange">
                    WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                    INFORMATION?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-4">
                  <a className="text-orange">
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-5">
                  <a className="text-orange">
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-6">
                  <a className="text-orange">
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-7">
                  <a className="text-orange">
                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-8">
                  <a className="text-orange">
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-9">
                  <a className="text-orange">WHAT ARE YOUR PRIVACY RIGHTS?</a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-10">
                  <a className="text-orange">
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-11">
                  <a className="text-orange">
                    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-12">
                  <a className="text-orange">
                    DO WE MAKE UPDATES TO THIS NOTICE?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-13">
                  <a className="text-orange">
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </a>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/privacy-and-policy#content-14">
                  <a className="text-orange">
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                    FROM YOU?
                  </a>
                </Link>
              </li>
            </ol>

            <div className="my-16" id="content-1">
              <PointTitle>
                <Bold>1. WHAT INFORMATION DO WE COLLECT?</Bold>
              </PointTitle>

              <Paragraph>
                <Bold>Personal information you disclose to us</Bold>
              </Paragraph>

              <Paragraph>
                <Bold>In Short:</Bold> We collect personal information that you
                provide to us.
              </Paragraph>

              <Paragraph>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Services, or otherwise when you contact us.
              </Paragraph>

              <Paragraph>
                <Bold>Sensitive Information.</Bold> We do not process sensitive
                information.
              </Paragraph>

              <Paragraph>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </Paragraph>

              <Paragraph>
                <Bold>Information collected from other sources</Bold>
              </Paragraph>

              <Paragraph>
                <Bold>In Short:</Bold> We may collect limited data from public
                databases, marketing partners, and other outside sources.
              </Paragraph>

              <Paragraph>
                In order to enhance our ability to provide relevant marketing,
                offers, and services to you and update our records, we may
                obtain information about you from other sources, such as public
                databases, joint marketing partners, affiliate programs, data
                providers, and from other third parties. This information
                includes mailing addresses, job titles, email addresses, phone
                numbers, intent data (or user behavior data), Internet Protocol
                (IP) addresses, social media profiles, social media URLs, and
                custom profiles, for purposes of targeted advertising and event
                promotion.
              </Paragraph>
            </div>

            <div className="my-16" id="content-2">
              <PointTitle>
                <Bold>2. HOW DO WE PROCESS YOUR INFORMATION?</Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> We process your information to provide,
                improve, and administer our Services, communicate with you, for
                security and fraud prevention, and to comply with law. We may
                also process your information for other purposes with your
                consent.
              </Paragraph>

              <Paragraph>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </Paragraph>

              <ul className="my-8 list-disc ml-6">
                <li>
                  <Bold>To deliver targeted advertising to you.</Bold>
                  We may process your information to develop and display
                  personalized content and advertising tailored to your
                  interests, location, and more.
                </li>
                <li className="mt-4">
                  <Bold>
                    To determine the effectiveness of our marketing and
                    promotional campaigns.
                  </Bold>{" "}
                  We may process your information to better understand how to
                  provide marketing and promotional campaigns that are most
                  relevant to you.
                </li>
                <li className="mt-4">
                  <Bold>
                    To save or protect an individual&apos;s vital interest.
                  </Bold>{" "}
                  We may process your information when necessary to save or
                  protect an individual’s vital interest, such as to prevent
                  harm.
                </li>
              </ul>
            </div>

            <div className="my-16" id="content-3">
              <PointTitle>
                <Bold>
                  3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                </Bold>
              </PointTitle>

              <Paragraph className="italic">
                <Bold>In Short:</Bold> We only process your personal information
                when we believe it is necessary and we have a valid legal reason
                (i.e., legal basis) to do so under applicable law, like with
                your consent, to comply with laws, to provide you with services
                to enter into or fulfill our contractual obligations, to protect
                your rights, or to fulfill our legitimate business interests.
              </Paragraph>

              <Paragraph className="underline">
                <Bold>
                  If you are located in the EU or UK, this section applies to
                  you.
                </Bold>
              </Paragraph>

              <Paragraph>
                The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on in order
                to process your personal information. As such, we may rely on
                the following legal bases to process your personal information:
              </Paragraph>

              <ul className="my-8 list-disc ml-6">
                <li>
                  <Bold>Consent.</Bold> We may process your information if you
                  have given us permission (i.e., consent) to use your personal
                  information for a specific purpose. You can withdraw your
                  consent at any time. Click here to learn more.
                </li>
                <li className="mt-4">
                  <Bold>Legitimate Interests.</Bold> We may process your
                  information when we believe it is reasonably necessary to
                  achieve our legitimate business interests and those interests
                  do not outweigh your interests and fundamental rights and
                  freedoms. For example, we may process your personal
                  information for some of the purposes described in order to:
                  Develop and display personalized and relevant advertising
                  content for our users Support our marketing activities
                  <ul className="my-4 list-disc ml-6">
                    <li>
                      Develop and display personalized and relevant advertising
                      content for our users
                    </li>
                    <li className="mt-4">Support our marketing activities</li>
                  </ul>
                </li>
                <li className="mt-4">
                  <Bold>Legal Obligations.</Bold> We may process your
                  information where we believe it is necessary for compliance
                  with our legal obligations, such as to cooperate with a law
                  enforcement body or regulatory agency, exercise or defend our
                  legal rights, or disclose your information as evidence in
                  litigation in which we are involved.
                </li>

                <li className="mt-4">
                  <Bold>Vital Interests.</Bold> We may process your information
                  where we believe it is necessary to protect your vital
                  interests or the vital interests of a third party, such as
                  situations involving potential threats to the safety of any
                  person.
                </li>
              </ul>

              <Paragraph className="underline">
                <Bold>
                  If you are located in Canada, this section applies to you.
                </Bold>
              </Paragraph>

              <Paragraph>
                We may process your information if you have given us specific
                permission (i.e., express consent) to use your personal
                information for a specific purpose, or in situations where your
                permission can be inferred (i.e., implied consent). You can
                withdraw your consent at any time. Click here to learn more.
              </Paragraph>
              <Paragraph>
                In some exceptional cases, we may be legally permitted under
                applicable law to process your information without your consent,
                including, for example:
              </Paragraph>

              <ul className="my-8 list-disc ml-6">
                <li>
                  If collection is clearly in the interests of an individual and
                  consent cannot be obtained in a timely way
                </li>
                <li className="mt-4">
                  For investigations and fraud detection and prevention
                </li>
                <li className="mt-4">
                  For business transactions provided certain conditions are met
                </li>
                <li className="mt-4">
                  If it is contained in a witness statement and the collection
                  is necessary to assess, process, or settle an insurance claim
                </li>
                <li className="mt-4">
                  For identifying injured, ill, or deceased persons and
                  communicating with next of kin
                </li>
                <li className="mt-4">
                  If we have reasonable grounds to believe an individual has
                  been, is, or may be victim of financial abuse
                </li>
                <li className="mt-4">
                  If it is reasonable to expect collection and use with consent
                  would compromise the availability or the accuracy of the
                  information and the collection is reasonable for purposes
                  related to investigating a breach of an agreement or a
                  contravention of the laws of Canada or a province
                </li>
                <li className="mt-4">
                  If disclosure is required to comply with a subpoena, warrant,
                  court order, or rules of the court relating to the production
                  of records
                </li>
                <li className="mt-4">
                  If it was produced by an individual in the course of their
                  employment, business, or profession and the collection is
                  consistent with the purposes for which the information was
                  produced
                </li>
                <li className="mt-4">
                  If the collection is solely for journalistic, artistic, or
                  literary purposes
                </li>
                <li className="mt-4">
                  If the information is publicly available and is specified by
                  the regulations
                </li>
              </ul>
            </div>

            <div className="my-16" id="content-4">
              <PointTitle>
                <Bold>
                  4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> We may share information in specific
                situations described in this section and/or with the following
                third parties.
              </Paragraph>

              <Paragraph>
                We may need to share your personal information in the following
                situations:
              </Paragraph>

              <ul className="my-8 list-disc ml-6">
                <li>
                  <Bold>Business Transfers.</Bold> We may share or transfer your
                  information in connection with, or during negotiations of, any
                  merger, sale of company assets, financing, or acquisition of
                  all or a portion of our business to another company.
                </li>
              </ul>
            </div>

            <div className="my-16" id="content-5">
              <PointTitle>
                <Bold>
                  5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> We may use cookies and other tracking
                technologies to collect and store your information.
              </Paragraph>

              <Paragraph>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
              </Paragraph>
            </div>

            <div className="my-16" id="content-6">
              <PointTitle>
                <Bold>6. HOW LONG DO WE KEEP YOUR INFORMATION?</Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> We keep your information for as long as
                necessary to fulfill the purposes outlined in this privacy
                notice unless otherwise required by law.
              </Paragraph>

              <Paragraph>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements).
              </Paragraph>

              <Paragraph>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </Paragraph>
            </div>

            <div className="my-16" id="content-7">
              <PointTitle>
                <Bold>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> We aim to protect your personal
                information through a system of organizational and technical
                security measures.
              </Paragraph>

              <Paragraph>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </Paragraph>
            </div>

            <div className="my-16" id="content-8">
              <PointTitle>
                <Bold>8. DO WE COLLECT INFORMATION FROM MINORS?</Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> We do not knowingly collect data from or
                market to children under 18 years of age.
              </Paragraph>

              <Paragraph>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at
                <a className="text-orange" href="mailto: radu@openbyte.dev">
                  {" "}
                  radu@openbyte.dev.
                </a>
              </Paragraph>
            </div>

            <div className="my-16" id="content-9">
              <PointTitle>
                <Bold>9. WHAT ARE YOUR PRIVACY RIGHTS?</Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> In some regions, such as the European
                Economic Area (EEA), United Kingdom (UK), and Canada, you have
                rights that allow you greater access to and control over your
                personal information. You may review, change, or terminate your
                account at any time.
              </Paragraph>

              <Paragraph>
                In some regions (like the EEA, UK, and Canada), you have certain
                rights under applicable data protection laws. These may include
                the right (i) to request access and obtain a copy of your
                personal information, (ii) to request rectification or erasure;
                (iii) to restrict the processing of your personal information;
                and (iv) if applicable, to data portability. In certain
                circumstances, you may also have the right to object to the
                processing of your personal information. You can make such a
                request by contacting us by using the contact details provided
                in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS
                NOTICE?&quot; below.
              </Paragraph>

              <Paragraph>
                We will consider and act upon any request in accordance with
                applicable data protection laws.
              </Paragraph>

              <Paragraph>
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your local data protection supervisory
                authority. You can find their contact details here:{" "}
                <a
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange"
                >
                  https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                </a>
              </Paragraph>

              <Paragraph>
                If you are located in Switzerland, the contact details for the
                data protection authorities are available here:{" "}
                <a
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange"
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html.
                </a>
              </Paragraph>

              <Paragraph>
                <Bold className="underline">Withdrawing your consent:</Bold> If
                we are relying on your consent to process your personal
                information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw
                your consent at any time. You can withdraw your consent at any
                time by contacting us by using the contact details provided in
                the section &quot;HOW CAN YOU CONTACT US ABOUT THIS
                NOTICE?&quot; below.
              </Paragraph>

              <Paragraph>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </Paragraph>

              <Paragraph>
                <Bold className="underline">
                  Cookies and similar technologies:
                </Bold>
                Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove
                cookies and to reject cookies. If you choose to remove cookies
                or reject cookies, this could affect certain features or
                services of our Services. To opt out of interest-based
                advertising by advertisers on our Services visit:{" "}
                <a
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange"
                >
                  http://www.aboutads.info/choices/.
                </a>
              </Paragraph>

              <Paragraph>
                If you have questions or comments about your privacy rights, you
                may email us at{" "}
                <a className="text-orange" href="mailto: hi@openbyte.dev">
                  hi@openbyte.dev
                </a>
                .
              </Paragraph>
            </div>

            <div className="my-16" id="content-10">
              <PointTitle>
                <Bold>10. CONTROLS FOR DO-NOT-TRACK FEATURES</Bold>
              </PointTitle>

              <Paragraph>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (&quot;DNT&quot;) feature or
                setting you can activate to signal your privacy preference not
                to have data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </Paragraph>
            </div>

            <div className="my-16" id="content-11">
              <PointTitle>
                <Bold>
                  11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> Yes, if you are a resident of California,
                you are granted specific rights regarding access to your
                personal information.
              </Paragraph>

              <Paragraph>
                California Civil Code Section 1798.83, also known as the
                &quot;Shine The Light&quot; law, permits our users who are
                California residents to request and obtain from us, once a year
                and free of charge, information about categories of personal
                information (if any) we disclosed to third parties for direct
                marketing purposes and the names and addresses of all third
                parties with which we shared personal information in the
                immediately preceding calendar year. If you are a California
                resident and would like to make such a request, please submit
                your request in writing to us using the contact information
                provided below.
              </Paragraph>

              <Paragraph>
                If you are under 18 years of age, reside in California, and have
                a registered account with Services, you have the right to
                request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us
                using the contact information provided below and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Services, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g., backups, etc.).
              </Paragraph>

              <Paragraph>
                <Bold>CCPA Privacy Notice</Bold>
              </Paragraph>

              <Paragraph>
                The California Code of Regulations defines a
                &quot;resident&quot; as:
              </Paragraph>

              <ol className="my-8 list-decimal ml-6">
                <li>
                  every individual who is in the State of California for other
                  than a temporary or transitory purpose and
                </li>
                <li className="mt-4">
                  every individual who is domiciled in the State of California
                  who is outside the State of California for a temporary or
                  transitory purpose
                </li>
              </ol>

              <Paragraph>
                All other individuals are defined as &quot;non-residents.&quot;
              </Paragraph>

              <Paragraph>
                If this definition of &quot;resident&quot; applies to you, we
                must adhere to certain rights and obligations regarding your
                personal information.
              </Paragraph>

              <Paragraph>
                <Bold>
                  What categories of personal information do we collect?
                </Bold>
              </Paragraph>

              <Paragraph>
                We have collected the following categories of personal
                information in the past twelve (12) months:
              </Paragraph>

              <div>
                <table className="border border-black text-left w-full border-spacing-0">
                  <thead>
                    <tr className="font-bold border" scope="col">
                      <th className="border p-6 w-1/4" scope="col">
                        Category
                      </th>
                      <th className="border p-6 w-2/4" scope="col">
                        Examples
                      </th>
                      <th className="border p-6 w-1/4" scope="col">
                        Collected
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border">
                      <td className="p-6 border">A. Identifiers</td>
                      <td className="p-6 border leading-6">
                        Contact details, such as real name, alias, postal
                        address, telephone or mobile contact number, unique
                        personal identifier, online identifier, Internet
                        Protocol address, email address, and account name
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">
                        B. Personal information categories listed in the
                        California Customer Records statute
                      </td>
                      <td className="p-6 border leading-6">
                        Name, contact information, education, employment,
                        employment history, and financial information
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">
                        C. Protected classification characteristics under
                        California or federal law
                      </td>
                      <td className="p-6 border leading-6">
                        Gender and date of birth
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">D. Commercial information</td>
                      <td className="p-6 border leading-6">
                        Transaction information, purchase history, financial
                        details, and payment information
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">E. Biometric information</td>
                      <td className="p-6 border leading-6">
                        Fingerprints and voiceprints
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">
                        F. Internet or other similar network activity
                      </td>
                      <td className="p-6 border leading-6">
                        Browsing history, search history, online behavior,
                        interest data, and interactions with our and other
                        websites, applications, systems, and advertisements
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">G. Geolocation data</td>
                      <td className="p-6 border leading-6">Device location</td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">
                        H. Audio, electronic, visual, thermal, olfactory, or
                        similar information
                      </td>
                      <td className="p-6 border leading-6">
                        Images and audio, video or call recordings created in
                        connection with our business activities
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">
                        I. Professional or employment-related information
                      </td>
                      <td className="p-6 border leading-6">
                        Business contact details in order to provide you our
                        Services at a business level or job title, work history,
                        and professional qualifications if you apply for a job
                        with us
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">J. Education Information</td>
                      <td className="p-6 border leading-6">
                        Student records and directory information
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                    <tr className="border">
                      <td className="p-6 border">
                        K. Inferences drawn from other personal information
                      </td>
                      <td className="p-6 border leading-6">
                        Inferences drawn from any of the collected personal
                        information listed above to create a profile or summary
                        about, for example, an individual’s preferences and
                        characteristics
                      </td>
                      <td className="text-center p-6 border">NO</td>
                    </tr>
                  </tbody>
                </table>

                <Paragraph>
                  We may also collect other personal information outside of
                  these categories through instances where you interact with us
                  in person, online, or by phone or mail in the context of:
                </Paragraph>

                <ul className="my-8 list-decimal ml-6">
                  <li>Receiving help through our customer support channels;</li>
                  <li className="mt-4">
                    Participation in customer surveys or contests; and
                  </li>
                  <li className="mt-4">
                    Facilitation in the delivery of our Services and to respond
                    to your inquiries.
                  </li>
                </ul>

                <Paragraph>
                  <Bold>
                    How do we use and share your personal information?
                  </Bold>
                </Paragraph>

                <Paragraph>
                  More information about our data collection and sharing
                  practices can be found in this privacy notice.
                </Paragraph>
                <Paragraph>
                  You may contact us by email at{" "}
                  <a className="text-orange" href="mailto: hi@openbyte.dev">
                    hi@openbyte.dev
                  </a>
                  , or by referring to the contact details at the bottom of this
                  document.
                </Paragraph>
                <Paragraph>
                  If you are using an authorized agent to exercise your right to
                  opt out we may deny a request if the authorized agent does not
                  submit proof that they have been validly authorized to act on
                  your behalf.
                </Paragraph>
                <Paragraph>
                  <Bold>Will your information be shared with anyone else?</Bold>
                </Paragraph>
                <Paragraph>
                  We may disclose your personal information with our service
                  providers pursuant to a written contract between us and each
                  service provider. Each service provider is a for-profit entity
                  that processes the information on our behalf.
                </Paragraph>
                <Paragraph>
                  We may use your personal information for our own business
                  purposes, such as for undertaking internal research for
                  technological development and demonstration. This is not
                  considered to be &quot;selling&quot; of your personal
                  information.
                </Paragraph>
                <Paragraph>
                  ELITIV GROUP SRL has not disclosed or sold any personal
                  information to third parties for a business or commercial
                  purpose in the preceding twelve (12) months. ELITIV GROUP SRL
                  will not sell personal information in the future belonging to
                  website visitors, users, and other consumers.
                </Paragraph>
                <Paragraph>
                  <Bold>Your rights with respect to your personal data</Bold>
                </Paragraph>
                <Paragraph className="underline">
                  Right to request deletion of the data — Request to delete
                </Paragraph>
                <Paragraph>
                  You can ask for the deletion of your personal information. If
                  you ask us to delete your personal information, we will
                  respect your request and delete your personal information,
                  subject to certain exceptions provided by law, such as (but
                  not limited to) the exercise by another consumer of his or her
                  right to free speech, our compliance requirements resulting
                  from a legal obligation, or any processing that may be
                  required to protect against illegal activities.
                </Paragraph>

                <Paragraph className="underline">
                  Right to be informed — Request to know
                </Paragraph>

                <Paragraph>
                  Depending on the circumstances, you have a right to know:
                </Paragraph>

                <ul className="my-8 list-disc ml-6">
                  <li>whether we collect and use your personal information;</li>
                  <li className="mt-4">
                    the categories of personal information that we collect;
                  </li>
                  <li className="mt-4">
                    the purposes for which the collected personal information is
                    used;
                  </li>
                  <li className="mt-4">
                    whether we sell your personal information to third parties;
                  </li>
                  <li className="mt-4">
                    the categories of personal information that we sold or
                    disclosed for a business purpose;
                  </li>
                  <li className="mt-4">
                    the categories of third parties to whom the personal
                    information was sold or disclosed for a business purpose;
                    and
                  </li>
                  <li className="mt-4">
                    the business or commercial purpose for collecting or selling
                    personal information.
                  </li>
                </ul>

                <Paragraph>
                  In accordance with applicable law, we are not obligated to
                  provide or delete consumer information that is de-identified
                  in response to a consumer request or to re-identify individual
                  data to verify a consumer request.
                </Paragraph>
                <Paragraph className="underline">
                  Right to Non-Discrimination for the Exercise of a Consumer’s
                  Privacy Rights
                </Paragraph>
                <Paragraph>
                  We will not discriminate against you if you exercise your
                  privacy rights.
                </Paragraph>
                <Paragraph className="underline">
                  Verification process
                </Paragraph>
                <Paragraph>
                  Upon receiving your request, we will need to verify your
                  identity to determine you are the same person about whom we
                  have the information in our system. These verification efforts
                  require us to ask you to provide information so that we can
                  match it with information you have previously provided us. For
                  instance, depending on the type of request you submit, we may
                  ask you to provide certain information so that we can match
                  the information you provide with the information we already
                  have on file, or we may contact you through a communication
                  method (e.g., phone or email) that you have previously
                  provided to us. We may also use other verification methods as
                  the circumstances dictate.
                </Paragraph>
                <Paragraph>
                  We will only use personal information provided in your request
                  to verify your identity or authority to make the request. To
                  the extent possible, we will avoid requesting additional
                  information from you for the purposes of verification.
                  However, if we cannot verify your identity from the
                  information already maintained by us, we may request that you
                  provide additional information for the purposes of verifying
                  your identity and for security or fraud-prevention purposes.
                  We will delete such additionally provided information as soon
                  as we finish verifying you.
                </Paragraph>
                <Paragraph className="underline">
                  Other privacy rights
                </Paragraph>

                <ul className="my-8 list-disc ml-6">
                  <li>
                    You may object to the processing of your personal
                    information.
                  </li>
                  <li className="mt-4">
                    You may request correction of your personal data if it is
                    incorrect or no longer relevant, or ask to restrict the
                    processing of the information.
                  </li>
                  <li className="mt-4">
                    You can designate an authorized agent to make a request
                    under the CCPA on your behalf. We may deny a request from an
                    authorized agent that does not submit proof that they have
                    been validly authorized to act on your behalf in accordance
                    with the CCPA.
                  </li>
                  <li className="mt-4">
                    You may request to opt out from future selling of your
                    personal information to third parties. Upon receiving an
                    opt-out request, we will act upon the request as soon as
                    feasibly possible, but no later than fifteen (15) days from
                    the date of the request submission.
                  </li>
                </ul>

                <Paragraph>
                  To exercise these rights, you can contact us by email at
                  <a className="text-orange" href="mailto: hi@openbyte.dev">
                    hi@openbyte.dev
                  </a>
                  ,{" "}
                  <Bold>
                    {" "}
                    or by referring to the contact details at the bottom of this
                    document. If you have a complaint about how we handle your
                    data, we would like to hear from you.
                  </Bold>
                </Paragraph>
              </div>
            </div>

            <div className="my-16" id="content-12">
              <PointTitle>
                <Bold>12. DO WE MAKE UPDATES TO THIS NOTICE?</Bold>
              </PointTitle>

              <Paragraph>
                <Bold>In Short:</Bold> Yes, we will update this notice as
                necessary to stay compliant with relevant laws.
              </Paragraph>

              <Paragraph>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated &quot;Revised&quot; date
                and the updated version will be effective as soon as it is
                accessible. If we make material changes to this privacy notice,
                we may notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </Paragraph>
            </div>

            <div className="my-16" id="content-13">
              <PointTitle>
                <Bold>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Bold>
              </PointTitle>

              <Paragraph>
                If you have questions or comments about this notice, you may
                email us at hi@openbyte.dev or by post to:
              </Paragraph>

              <Paragraph>
                ELITIV GROUP SRL
                <Bold>
                  31 August 1989 St 78, Chișinău 2012
                  <br /> Chisinau, Moldova MD-2071
                  <br /> Moldova
                </Bold>
              </Paragraph>
            </div>

            <div className="my-16" id="content-14">
              <PointTitle>
                <Bold>
                  14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </Bold>
              </PointTitle>

              <Paragraph>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it. To request to
                review, update, or delete your personal information, please
                submit a request form by clicking{" "}
                <a
                  href="https://app.termly.io/notify/70495f9e-1aa3-4e5c-8c9f-7ee2e3012eee"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange"
                >
                  here.
                </a>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyAndPolicy;
