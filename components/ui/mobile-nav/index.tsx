import { FC } from 'react';
import Link from 'next/link';
import {
  Menubar,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menu-bar';
import { Url } from 'url';

interface MenuItem {
  title: string;
  href?: string | Url;
  description?: string;
}

interface MenuCategory {
  title: string;
  href?: string | URL | undefined;
  submenu?: MenuItem[];
  state?: string;
}

const menu: MenuCategory[] = [
  {
    title: 'home.',
    href: '/',
  },
  {
    title: 'people.',
    href: '/people',
  },
  {
    title: 'contact.',
    href: '/contact',
  },
];

const MobileNav: FC = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="fixed p-1 transform -translate-x-1/2 border-2 rounded-xl w-100 backdrop-blur bg-white/60 bottom-4 left-1/2 md:hidden">
        <Menubar className="gap-3 p-4 border-0 rounded-lg bg-zinc-900 text-zinc-50">
          {menu.map((item, index) => (
            <MenubarMenu key={index}>
              {item.href ? (
                <MenubarTrigger className="items-center justify-center text-md">
                  <Link href={item.href}>{item.title}</Link>
                  <MenubarSeparator />
                </MenubarTrigger>
              ) : null}
            </MenubarMenu>
          ))}
        </Menubar>
      </div>
    </div>
  );
};

export default MobileNav;