import React from 'react';
import Header from '@/components/layouts/header';
import MobileNav from '@/components/ui/mobile-nav';
import MobileNavigation from '@/components/ui/mobile-nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <MobileNavigation
        menuTitle="menu"
        menuActions={[
          {
            menuHeading: 'about',
            menuHeadingURL: '/about',
            menSubOptions: [
              {
                subOptionHeading: 'who we are',
                subMenuOptionURL: '/about#who-we-are',
              },
              {
                subOptionHeading: 'work culture',
                subMenuOptionURL: '/about#work-culture',
              },
              {
                subOptionHeading: 'dunolabs website BTS',
                subMenuOptionURL: '/about#dunolabs-website-bts',
              },
            ],
          },
          {
            menuHeading: 'people',
            menuHeadingURL: '/people',
            menSubOptions: [
              {
                subOptionHeading: 'our beliefs',
                subMenuOptionURL: '/people#who-we-are',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Layout;
