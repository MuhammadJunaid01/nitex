import React, { ReactNode } from "react";
import { Footer, MenuBar } from ".";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <MenuBar
        data={[
          { pathName: "Home", url: "/home" },
          { pathName: " About Us", url: "/about-us" },
          { pathName: "Services", url: "/services" },
          { pathName: "Testimonials", url: "/testimonials" },
        ]}
      />
      <div style={{ marginTop: 70 }}> {children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
