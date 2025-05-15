import { useForm, ValidationError } from "@formspree/react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkwjyak");
  return (
    <>
      <Helmet>
        <title>Contact Us | DamTech Nigeria Limited</title>
        <meta
          name="description"
          content="Reach out to DamTech Nigeria Limited for project inquiries, partnership opportunities, or general information."
        />
        <link rel="canonical" href="https://www.damtechnigeria.com/contact" />
        <meta property="og:title" content="Contact Damtech Nigeria Limited" />
        <meta
          property="og:description"
          content="Get in touch with our team to discuss your engineering and infrastructure needs."
        />
      </Helmet>

<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl mt-10 font-bold text-blue-700 text-center mb-6">
            Contact Us
          </h1>

          <div className="bg-white shadow-md rounded-lg p-8">
            {state.succeeded ? (
              <div className="text-center text-green-600 text-lg font-semibold">
                ✅ Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}

            {/* Contact Info */}
            <div className="mt-10 text-sm text-gray-600 text-center space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@damtechnigeria.com"
                  className="text-blue-700"
                >
                  info@damtechnigeria.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+2348037023388" className="text-blue-700">
                  +234-803-702-3388
                </a>
              </p>
              <p>
                <strong>Address:</strong> 117, Liberty Boulevard, British
                America, Jos, Plateau State, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
};

export default Contact;
