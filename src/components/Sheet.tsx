"use client";
import { navigationTabs } from "@/app/constants";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

export const Sheet = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="grid px-2 py-1 transition-all duration-200 ease-in-out rounded-lg place-items-center md:hidden hover:bg-gray-300 hover:shadow-md text-gray-950 active:shadow-inner active:bg-gray-400/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 fill-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-gray-700/60" />
        <Dialog.Content className="fixed top-0 right-0 z-40 w-full max-w-lg min-h-screen text-gray-700 bg-gray-100 shadow-2xl  data-[state=open]:animate-slideFromRight p-10 ">
          <Dialog.Title className="mt-5 text-xl font-semibold uppercase">
            <span className="text-gray-950">henry</span>
            <span className="ml-1 text-gray-500">truong</span>
          </Dialog.Title>
          <Dialog.Description className="grid grid-cols-1 gap-8 mt-10 text-lg font-semibold uppercase">
            {navigationTabs.map((tab) => {
              return (
                <Dialog.Close asChild key={tab.name}>
                  <Link
                    href={tab.href}
                    key={tab.name}
                    className="flex items-center gap-4 px-2 py-1"
                  >
                    {" "}
                    {tab.name}
                    <span className="ml-auto mr-20 leading-none animate-bounceSide">
                      &rarr;
                    </span>
                  </Link>
                </Dialog.Close>
              );
            })}
          </Dialog.Description>

          <Dialog.Close aria-label="close" className="absolute top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
