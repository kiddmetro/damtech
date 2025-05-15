import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use | DamTech Nigeria Limited</title>
        <meta
          name="description"
          content="Review the terms and conditions for using the Damtech Nigeria Limited website and services."
        />
      </Helmet>

<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
      <section className="bg-white text-gray-800 px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold mt-10 text-blue-700 text-center mb-6">
            Terms of Use
          </h1>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              By accessing and using the DamTech Nigeria Limited website
              (www.damtechnigeria.com), you agree to be bound by these Terms of
              Use. If you do not agree, please do not use the site.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              2. Use of Website
            </h2>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              <li>You may use our website for lawful purposes only.</li>
              <li>
                You agree not to:
                <ul className="list-disc ml-6 mt-1">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Disrupt the website’s operation.</li>
                  <li>Attempt unauthorized access to our systems.</li>
                  <li>
                    Use automated tools (bots/spiders) without permission.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              3. Intellectual Property
            </h2>
            <p className="text-sm text-gray-700">
              All content on this site — including text, graphics, logos,
              images, and software — is protected by copyright and intellectual
              property laws. You may not reproduce or distribute content without
              prior written consent.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              4. Disclaimer of Warranties
            </h2>
            <p className="text-sm text-gray-700">
              The website is provided "as is" and "as available". We make no
              guarantees regarding accuracy, reliability, or availability. All
              warranties — express or implied — are disclaimed, including
              fitness for a particular purpose.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              5. Limitation of Liability
            </h2>
            <p className="text-sm text-gray-700">
              DamTech Nigeria Limited is not liable for any damages (direct or
              indirect) arising from use of the website, including incidental or
              consequential damages.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              6. Links to Other Websites
            </h2>
            <p className="text-sm text-gray-700">
              We may link to third-party websites. We are not responsible for
              the content or practices of those external sites.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              7. Governing Law
            </h2>
            <p className="text-sm text-gray-700">
              These terms are governed by the laws of the Federal Republic of
              Nigeria.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              8. Changes to These Terms
            </h2>
            <p className="text-sm text-gray-700">
              We may update these Terms of Use at any time. Changes will be
              posted on this page along with the updated date.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700">
              9. Contact Us
            </h2>
            <p className="text-sm text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@damtechnigeria.com"
                className="text-blue-600 underline"
              >
                info@damtechnigeria.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+2348037023388" className="text-blue-600 underline">
                +234-803-702-3388
              </a>
              <br />
              Address: 117, Liberty Boulevard, British America, Jos, Plateau
              State, Nigeria
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last Updated: May, 2025
            </p>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
};

export default TermsOfUse;
