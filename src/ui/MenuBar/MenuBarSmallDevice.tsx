import React from "react";
import "./MenuBarSmallDevice.css"; // You'll need to create this CSS file
import { IMenuBarSmallDevice } from "../../lib/interface";
import { NavLink } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
const MenuBarSmallDevice: React.FC<IMenuBarSmallDevice> = ({
  data,
  toggleModal,
  isOpen,
}) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleModal = () => {
  //     setIsOpen(!isOpen);
  //   };
  const modalContent = (
    <div className="modal-content">
      {data.map(({ pathName, url }, index) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-item-small-device active"
                : "nav-item-small-device inactive"
            }
            to={url == "/home" ? "/" : url}
            key={index}
          >
            {pathName}
          </NavLink>
        );
      })}
    </div>
  );
  return (
    <div>
      {/* <button onClick={toggleModal}>Open Modal</button> */}

      {isOpen && (
        <div className="modal-overlay">
          <div className={`modal ${isOpen ? "open" : ""}`}>
            <button onClick={toggleModal} className="close-button">
              <BsXLg />
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBarSmallDevice;
