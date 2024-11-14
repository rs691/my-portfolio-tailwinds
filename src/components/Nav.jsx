import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/navigation.css"; // Import your CSS file

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);

  // Handle link activation and deactivation
  const handleLinkClick = (linkIndex) => {
    setActiveLink(linkIndex);
  };

  // Automatically activate the first link on component mount
  useEffect(() => {
    setActiveLink(0);
  }, []);

  return (
    <nav className="navigation">
  <ul>
    <li className={activeLink === 0 ? "active" : ""}>
      <Link to="/" onClick={() => handleLinkClick(0)}>
      
        Home
      </Link>
    </li>
    {/* Add similar SVGs for About and Contact links */}
  </ul>
</nav>

  );
};

export default Nav;