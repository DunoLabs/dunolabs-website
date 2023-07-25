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
            menuHeading: 'home',
            menuHeadingURL: '/',
            menuSubOptions: [],
          },
          {
            menuHeading: 'about',
            menuHeadingURL: '/about',
            menuSubOptions: [
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
            menuSubOptions: [
              {
                subOptionHeading: 'our beliefs',
                subMenuOptionURL: '/people#who-we-are',
              },
            ],
          },
          {
            menuHeading: 'services',
            menuHeadingURL: '/services',
            menuSubOptions: [
              {
                subOptionHeading: 'web development',
                subMenuOptionURL: '/services#web-development',
              },
              {
                subOptionHeading: 'ux & ui design',
                subMenuOptionURL: '/services#ux-ui-design',
              },
            ],
          },
          {
            menuHeading: 'contact us',
            menuHeadingURL: '/contact',
            menuSubOptions: [],
          },
        ]}
      />
    </div>
  );
};

export default Layout;
