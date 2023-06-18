import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const ListItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}): JSX.Element => {
  return (
    <NavigationMenu.Item className="px-2 py-1 font-semibold tracking-tight text-gray-700 uppercase transition-all duration-200 ease-in-out rounded-lg hover:bg-gray-300 hover:shadow-md">
      <NavigationMenu.Link asChild>
        <Link href={href}>
          <p>{children}</p>
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};
