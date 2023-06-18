"use client";
import { socials } from "@/app/constants";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Footer() {
  return (
    <NavigationMenu.Root className="text-gray-800 mt-28">
      <NavigationMenu.List className="flex flex-wrap justify-around w-full max-w-6xl px-2 py-1 mx-auto ">
        {socials.map((social) => {
          return (
            <FooterItem social={social} key={social.name}>
              {social.name}
            </FooterItem>
          );
        })}
        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}

function FooterItem({
  children,
  social,
}: {
  children: React.ReactNode;
  social: { src: string; href: string; alt: string };
}) {
  return (
    <NavigationMenu.Item className="flex items-center px-4 py-1 leading-none transition-all duration-200 ease-in-out divide-x divide-gray-800 rounded-lg cursor-pointer md:px-16 md:py-2 hover:bg-gray-300">
      <span className="pr-4">
        <img src={social.src} alt={social.alt} width={20} height={20} />
      </span>
      <NavigationMenu.Link
        className="pl-4 font-semibold tracking-tight uppercase"
        asChild
      >
        <a href={social.href}>{children}</a>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
