import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navigationOptions = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Projects",
    href: "/",
  },
];

export const TopBar = () => {
  return (
    <div className="flex border-b border-b-secondary">
      <div className="m-[1%]">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {"Jackie Gong"}
        </h4>
      </div>
      <div className="flex justify-end grow m-[1%]">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationOptions.map((option) => {
              return (
                <NavigationMenuItem key={option.name}>
                  <Link href={option.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {option.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="px-1"></div>
        <ThemeToggle />
      </div>
    </div>
  );
};
