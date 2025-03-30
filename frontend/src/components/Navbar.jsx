import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] text-white shadow-xl fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            <span className="text-[#facc15] drop-shadow-md">D</span>igbijaya{" "}
            <span className="text-[#facc15] drop-shadow-md">L</span>enka
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-700/50 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="text-2xl text-white hover:text-[#facc15] transition-colors duration-200" />
            ) : (
              <FiMenu className="text-2xl text-white hover:text-[#facc15] transition-colors duration-200" />
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`md:flex md:items-center md:space-x-10 absolute md:static left-0 w-full md:w-auto bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] md:bg-transparent md:p-0 transition-all duration-300 ease-in-out ${
              isOpen
                ? "top-16 opacity-100"
                : "top-[-400px] md:top-0 opacity-0 md:opacity-100"
            }`}
          >
            {["Home", "About", "Projects", "Education", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="border-b border-blue-700/30 md:border-0 py-3 md:py-0 px-6 md:px-0"
                >
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `relative block text-lg font-medium tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-[#facc15]"
                          : "text-white hover:text-[#facc15]"
                      } md:after:content-[''] md:after:absolute md:after:w-full md:after:h-[2px] md:after:bg-[#facc15] md:after:left-0 md:after:bottom-[-8px] md:after:scale-x-0 md:after:origin-center md:after:transition-transform md:after:duration-300 ${
                        isActive
                          ? "md:after:scale-x-100"
                          : "md:hover:after:scale-x-100"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
