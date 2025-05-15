import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>
            117, Liberty Boulevard,
            <br />
            British America, Jos,
            <br />
            Plateau State, Nigeria
          </p>
          <p className="mt-10">📞 +234-803-702-3388</p>
          <p>
            ✉️{" "}
            <a
              href="mailto:info@damtechnigeria.com"
              className="hover:text-white"
            >
              info@damtechnigeria.com
            </a>
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="hover:text-white">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h4 className="text-white font-semibold mb-2">Connect with Us</h4>
          <a
            href="https://www.linkedin.com/company/DamtechNigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-8 text-center text-xs text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Damtech Nigeria Limited. All rights
        reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
