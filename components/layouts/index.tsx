import React from "react";
import Header from "components/layouts/Header";
import MobileNav from "components/ui/MobileNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <MobileNav />
    </div>
  );
};

export default Layout;
