import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DamTech Nigeria Limited</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how Damtech Nigeria Limited collects, uses, and protects your personal information."
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
            Privacy Policy
          </h1>

          {/* Introduction */}
          <div>
            <p>
              DamTech Nigeria Limited ("we," "us," or "our") is committed to
              protecting the privacy of your information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard your
              personal information when you use our website
              (www.damtechnigeria.com) and the services offered through it.
            </p>
            <p className="mt-2">
              By using our website, you consent to the practices described in
              this policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                1. Information We Collect
              </h2>
              <p className="mt-1 font-medium">Information You Provide:</p>
              <ul className="list-disc ml-6 text-sm text-gray-700">
                <li>
                  Contact information (name, email address, phone number).
                </li>
                <li>Information submitted in job applications.</li>
              </ul>
              <p className="mt-2 font-medium">
                Automatically Collected Information:
              </p>
              <ul className="list-disc ml-6 text-sm text-gray-700">
                <li>
                  IP address, browser type, operating system, referring website
                </li>
                <li>
                  Pages visited, date/time of visit, cookies & tracking
                  technologies
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc ml-6 text-sm text-gray-700">
                <li>To respond to inquiries and requests</li>
                <li>To provide information about our services</li>
                <li>To process job applications</li>
                <li>To improve our website and personalize user experience</li>
                <li>To send newsletters (if opted in)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                3. Cookies and Tracking Technologies
              </h2>
              <p className="text-sm text-gray-700">
                Our site may use cookies to enhance functionality, analytics,
                and personalization. You can control cookie settings in your
                browser. Disabling them may affect features.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                4. How We Share Your Information
              </h2>
              <ul className="list-disc ml-6 text-sm text-gray-700">
                <li>With employees/contractors as needed</li>
                <li>
                  With third-party service providers (hosting, analytics, email)
                </li>
                <li>With legal authorities when required</li>
              </ul>
              <p className="text-sm mt-2">
                We do <strong>not</strong> sell your personal information to
                third parties.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                5. Data Security
              </h2>
              <p className="text-sm text-gray-700">
                Reasonable measures are in place to protect your data, but no
                method is 100% secure. Use the website at your own risk.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                6. Your Rights
              </h2>
              <ul className="list-disc ml-6 text-sm text-gray-700">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to how your data is used</li>
              </ul>
              <p className="text-sm mt-2">
                Contact us using the details below to exercise these rights.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                7. Links to Other Websites
              </h2>
              <p className="text-sm text-gray-700">
                External links on our site are not covered by this policy.
                Please review their privacy policies separately.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                8. Children's Privacy
              </h2>
              <p className="text-sm text-gray-700">
                Our site is not intended for children under 13. We do not
                knowingly collect data from them.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-sm text-gray-700">
                This policy may be updated occasionally. Any changes will appear
                on this page.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                10. Contact Us
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
                <a
                  href="tel:+2348037023388"
                  className="text-blue-600 underline"
                >
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
        </div>
      </section>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
