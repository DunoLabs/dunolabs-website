"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  href: string;
  submenu?: MenuItem[];
}

const menu: MenuCategory[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    submenu: [
      {
        title: "Web Development",
        href: "/services/web-dev",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Mobile Development",
        href: "/services/mobile-dev",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    submenu: [
      {
        title: "Web Development",
        href: "/services/web-dev",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function NavTabs() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.submenu ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {item.submenu.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-color focus:bg-zinc-100 hover:bg-zinc-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100">
            {title}
          </div>

          <p className="text-sm leading-snug line-clamp-2 text-zinc-500 dark:text-zinc-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

