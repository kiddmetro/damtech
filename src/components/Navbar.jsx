import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/DamTech Logo.jpg";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Sustainability", path: "/sustainability" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <div className="flex items-center space-x-20">
          <div onClick={() => handleNavClick("/")} className="cursor-pointer text-left">
            <img src={logo} alt="Damtech Logo" className="h-8 w-auto mb-2 ml-6" />
            <p className="text-[9px] text-black font-bold -mt-1">
              DAMTECH NIGERIA LIMITED
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 mt-2">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`${
                  location.pathname === link.path
                    ? "text-blue-700 font-bold"
                    : "text-gray-700"
                } hover:text-blue-500 transition`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

      {/* Contact Button (Desktop) */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      className="hidden md:block"
    >
      <button
        onClick={() => handleNavClick("/contact")}
        className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold shadow hover:bg-blue-800 transition"
      >
        Contact Us
      </button>
    </motion.div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col justify-between py-10 px-6"
    >
      {/* Close Button */}
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)} className="text-3xl">
          <FiX />
        </button>
      </div>

      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
         <div onClick={() => handleNavClick("/")} className="cursor-pointer text-left">
            <img src={logo} alt="DamTech Logo" className="h-14 w-auto mb-4 ml-6" />
            <p className="text-[12px] text-black font-bold -mt-1">
              DAMTECH NIGERIA LIMITED
            </p>
          </div>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center space-y-6 mt-10">
        {links.map((link, i) => (
          <motion.button
            key={link.path}
            onClick={() => handleNavClick(link.path)}
            initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className={`text-lg ${
              location.pathname === link.path
                ? "text-blue-700 font-bold"
                : "text-gray-800"
            } hover:text-blue-500`}
          >
            {link.name}
          </motion.button>
        ))}
      </div>

      {/* Contact Button */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 + links.length * 0.15 }}
        className="flex justify-center pb-8"
      >
        <button
          onClick={() => handleNavClick("/contact")}
          className="bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold shadow hover:bg-blue-800 transition"
        >
          Contact Us
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;
