import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/DamTech Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between h-[72px]">
        <div className="flex items-center space-x-20">
          <div onClick={handleLogoClick} className="cursor-pointer text-left">
            <img src={logo} alt="Damtech Logo" className="h-10 w-auto mb-2 ml-6" />
            <p className="text-[9px] text-black font-bold -mt-1">
              DAMTECH NIGERIA LIMITED
            </p>
          </div>

          <div className="hidden md:flex space-x-12 mt-2">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-500">
              Services
            </Link>
            <Link to="/projects" className="hover:text-blue-500">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md">
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="block"
          >
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Services
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
