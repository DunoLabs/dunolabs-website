import React from 'react';
import Header from '@/components/layouts/header';
import MobileNavigation from '@/components/ui/mobile-nav';

interface MenuItem {
  menuHeading: string;
  menuHeadingURL: string;
  menuSubOptions: SubMenuOption[];
}

interface SubMenuOption {
  subOptionHeading: string;
  subMenuOptionURL: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

const menuItems: MenuItem[] = [
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
    menuHeading: 'career',
    menuHeadingURL: '/career',
    menuSubOptions: [
      {
        subOptionHeading: 'our beliefs',
        subMenuOptionURL: '/career#who-we-are',
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
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <MobileNavigation menuTitle="menu" menuActions={menuItems} />
    </div>
  );
};

export default Layout;
