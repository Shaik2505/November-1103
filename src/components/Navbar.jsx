import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import NavLinks from "../utils/NavLinks";
import { CloseIcon, HamburgerIcon } from "./Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Managing theme state
  const navRef = useRef(null);

  const closeMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 300); // Delay for animation
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle dark theme
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const menuClasses = `fixed inset-y-0 right-0 w-52 bg-primary shadow-lg rounded-lg transform transition-transform duration-300 md:hidden z-50 ${
    isAnimating ? "animate-slideOut" : "animate-slideIn"
  } `;

  return (
    <nav
      ref={navRef}
      className={`w-full sticky top-0 z-50 bg-primary shadow-md transition duration-300 ${isDarkTheme ? "dark:bg-darkPrimary" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/body/home"
              className={`text-text hover:text-text/50 text-2xl font-bold ${isDarkTheme ? "dark:text-darkText dark:hover:text-darkOnHover" : ""}`}
              onClick={handleScrollToTop}
            >
              MyApp
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onLinkClick={closeMenu} />
            <ThemeBtn onClick={toggleTheme} />
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeBtn onClick={toggleTheme} />
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-primary/50 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {(isOpen || isAnimating) && (
        <>
          <div className={menuClasses}>
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="text-white hover:bg-primary/50 p-2 rounded-md focus:outline-none"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <NavLinks onLinkClick={closeMenu} />
            </div>
          </div>

          {/* Ensure the overlay is displayed only when the menu is open */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            ></div>
          )}
        </>
      )}
    </nav>
  );
};


export default Navbar;


<style jsx>{`
  @media (min-width: 768px) and (max-width: 1024px) {
    .navbar {
      height: 64px; /* Adjust according to your design */
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
    }
    .navbar-logo {
      flex-shrink: 0;
    }
    .navbar-menu {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .navbar-mobile-button {
      display: none;
    }
  }
`}</style>
