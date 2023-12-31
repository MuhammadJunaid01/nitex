import React, { memo } from "react";
import "./menubar.css";
import { NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa6";
import { IMenu } from "../../lib/interface";
import MenuBarSmallDevice from "./MenuBarSmallDevice";
const MenuBar: React.FC<IMenu> = memo(({ data }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`navbar${menuOpen ? " " : ""}`}>
      <div className="nav-container">
        <a href="/" className="logo">
          My App
        </a>
        <div className={`menu-toggle${menuOpen ? " open" : ""}`}>
          <div className="bar" onClick={toggleMenu}>
            <FaAlignLeft />
            <MenuBarSmallDevice
              isOpen={menuOpen}
              toggleModal={toggleMenu}
              data={data}
            />
          </div>
        </div>

        <ul className={`nav-list${menuOpen ? " " : ""}`}>
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
