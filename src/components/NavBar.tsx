"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { forwardRef } from "react";
import { Sheet } from "@/components/Sheet";
import { navigationTabs } from "../app/constants";
import { ListItem } from "./ListItem";
export default function NavBar() {
  return (
    <NavigationMenu.Root className="text-gray-900 ">
      <NavigationMenu.List className="flex justify-between max-w-6xl gap-4 p-1 mx-auto bg-gray-200 rounded-lg shadow-inner">
        <div className="flex gap-2">
          <NavigationMenu.Item className="grid px-2 py-1 font-semibold uppercase place-items-center">
            <NavigationMenu.Link href="/">
              <span className="text-gray-950">henry</span>
              <span className="ml-1 text-gray-500">truong</span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <div className="hidden gap-2 md:flex">
            {navigationTabs.map((tab) => {
              return (
                <ListItem key={tab.name} href={tab.href}>
                  {tab.name}
                </ListItem>
              );
            })}
          </div>
        </div>
        {/* hamburger menu */}
        <NavigationMenu.Item>
          <Sheet />
        </NavigationMenu.Item>
        {/* hamburger menu */}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
