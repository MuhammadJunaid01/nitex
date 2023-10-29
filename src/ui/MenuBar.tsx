import React, { memo } from "react";
import { IMenu } from "../lib/interface";
import "../lib/styles/navbar.css";
import { Link, NavLink, useSearchParams } from "react-router-dom";
const MenuBar: React.FC<IMenu> = memo(({ data }) => {
  console.log("data", data);
  // const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`navbar${menuOpen ? " open" : ""}`}>
      <div className="container">
        <a href="/" className="logo">
          My App
        </a>
        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
        </button>
        <ul className={`nav-list${menuOpen ? " open" : ""}`}>
          {data.map(({ pathName, url }, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item inactive"
                }
                key={index}
                to={url == "/home" ? "/" : url}
              >
                {pathName}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
});

export default MenuBar;
