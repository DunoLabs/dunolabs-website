import React from 'react';
import Header from '@/components/layouts/header';
import MobileNav from '@/components/ui/mobile-nav';

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
