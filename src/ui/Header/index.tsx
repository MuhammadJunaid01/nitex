import { links } from "../../lib/data";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <div className="logo">
              <a href="#">
                {/* <img src={logo} alt="" /> */}
                logo
              </a>
            </div>
            <ul>
              {links?.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
