import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  // Reused CSS classes
  const baseClasses =
    "text-text block md:inline-block hover:text-text/50 transition duration-300 py-2 px-2 dark:text-darkText dark:hover:text-darkOnHover";

  // Scroll to top and invoke the optional onLinkClick callback
  const handleClick = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onLinkClick) onLinkClick(event);
  };

  // Array of navigation links
  const links = [
    { to: "/body/home", label: "Home" },
    { to: "/body/coordination", label: "Coordination" },
    { to: "/body/registry", label: "Registry" },
    { to: "/body/ticketry", label: "Ticketry" },
    { to: "/body/engagement", label: "Engagement" },
    { to: "/body/infographics", label: "Infographics" },
    { to: "/body/playification", label: "Playification" },
    { to: "/body/profile", label: "Profile" },
    { to: "/", label: "Logout" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 text-cSM">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={handleClick}
          className={baseClasses}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
