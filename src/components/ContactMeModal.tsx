"use client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";

export default function ContactMeModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex items-center justify-around px-2 py-1 mt-3 text-gray-100 bg-gray-800 rounded-lg w-36 lg:mt-0 hover:bg-gray-700 active:bg-gray-800">
          contact me{" "}
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
          </section>
          <section className="flex flex-col max-w-sm gap-4 mx-auto mt-6">
            <fieldset className="flex items-center justify-between ">
              <Label.Root className="capitalize" htmlFor="name">
                name
              </Label.Root>
              <input
                type="text"
                placeholder="John Doe"
                id="name"
                className="px-2 py-1 border rounded-lg"
              />
            </fieldset>
            <fieldset className="flex items-center justify-between ">
              <Label.Root className="capitalize" htmlFor="email">
                email
              </Label.Root>
              <input
                type="text"
                placeholder="JohnDoe@gmail.com"
                id="email"
                className="px-2 py-1 border rounded-lg"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-3 mt-4">
              <Label.Root className="capitalize" htmlFor="message">
                message
              </Label.Root>
              <textarea
                className="px-2 py-1 border"
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message me here"
              ></textarea>
            </fieldset>
            <div className="flex justify-end mt-4">
              <Dialog.Close asChild>
                <button
                  onClick={() => console.log("sent")}
                  className="grid px-2 text-teal-900 bg-teal-400 rounded-lg place-items-center"
                >
                  Send
                </button>
              </Dialog.Close>
            </div>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
