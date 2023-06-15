import React from "react";
import Header from "components/layouts/Header";
import MobileMenu from "components/ui/MobileMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <MobileMenu />
    </div>
  );
};

export default Layout;
