"use client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";
import { FormEvent, useReducer, useState } from "react";
import { z } from "zod";
import ContactMeForm from "./ContactMeForm";

export default function ContactMeModal() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="flex items-center justify-around px-2 py-1 mt-3 text-gray-100 bg-gray-800 rounded-lg w-36 lg:mt-0 hover:bg-gray-700 active:bg-gray-800">
          contact me
          <span className="text-gray-100">
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-gray-700/50" />
        <Dialog.Content className="fixed inset-0 z-20 max-w-lg px-2 py-5 m-auto data-[state=open]:animate-slideUpAndFade text-gray-900 bg-gray-100 rounded-lg max-h-fit data-[]">
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
          <section className="max-w-sm mx-auto">
            <Dialog.Title className="text-2xl font-semibold tracking-tight text-center text-gray-700 capitalize">
              contact me
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 first-letter:capitalize">
              don&apos;t hesitate to drop me a email if you need any questions
              answered or a quick consultation!
            </Dialog.Description>
            {/* FORM LIVES HERE */}
            <ContactMeForm setOpen={setOpen} />
            {/* FORM LIVES HERE */}
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
