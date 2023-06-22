"use client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  name: z
    .string()
    .nonempty("name is required")
    .max(50, { message: "maximum of 50 characters" })
    .trim(),
  email: z
    .string()
    .nonempty("email is required")
    .email("email is not valid")
    .trim(),
  message: z
    .string()
    .nonempty("message is required")
    .max(300, { message: "maximum of 300 characters" })
    .trim(),
});
export default function ContactMeForm({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        //TODO: send the data to a server using a post api route
        const asyncAlert = () =>
          new Promise((resolve) =>
            setTimeout(() => {
              resolve(
                alert("Thank you for your message, I'll get back to you soon")
              );
            }, 100)
          );
        await asyncAlert();

        reset();
        setOpen(false);
      })}
      className="flex flex-col max-w-sm gap-8 mx-auto mt-10 "
    >
      <fieldset className="relative">
        <input
          type="text"
          placeholder="Name"
          id="name"
          className="w-full px-2 py-1 placeholder-transparent border rounded-lg peer first-letter:capitalize"
          {...register("name")}
        />
        {errors.name && (
          <p className="px-2 mt-4 text-sm text-red-800 bg-red-300 rounded-lg w-fit first-letter:capitalize">
            {errors.name.message as string}
          </p>
        )}
        <Label.Root
          className="absolute left-0 block pl-2 text-gray-700 capitalize transition-all duration-200 ease-in-out -top-7 peer-placeholder-shown:top-1 peer-placeholder-shown:text-gray-400 peer-focus:-top-7 peer-focus:text-gray-600"
          htmlFor="name"
        >
          name
        </Label.Root>
      </fieldset>
      <fieldset className="relative mt-2">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="w-full px-2 py-1 placeholder-transparent border rounded-lg peer"
          {...register("email")}
        />
        {errors.email && (
          <p className="px-2 mt-4 text-sm text-red-800 bg-red-300 rounded-lg w-fit first-letter:capitalize">
            {errors.email.message as string}
          </p>
        )}
        <Label.Root
          className="absolute left-0 block pl-2 text-gray-700 capitalize transition-all duration-200 ease-in-out -top-7 peer-placeholder-shown:top-1 peer-placeholder-shown:text-gray-400 peer-focus:-top-7 peer-focus:text-gray-600"
          htmlFor="email"
        >
          email
        </Label.Root>
      </fieldset>
      <fieldset className="relative flex flex-col gap-3 mt-4">
        <textarea
          className="px-2 py-1 placeholder-transparent border peer"
          id="message"
          cols={30}
          rows={10}
          placeholder="Message me here"
          {...register("message")}
        />
        {errors.message && (
          <p className="px-2 mt-1 text-sm text-red-800 bg-red-300 rounded-lg w-fit first-letter:capitalize">
            {errors.message.message as string}
          </p>
        )}
        <Label.Root
          className="absolute left-0 pl-2 text-gray-700 transition-all duration-200 ease-in-out first-letter:capitalize -top-7 peer-placeholder-shown:top-1 peer-placeholder-shown:text-gray-400 peer-focus:-top-7 peer-focus:text-gray-600"
          htmlFor="message"
        >
          message me here
        </Label.Root>
      </fieldset>
      <button
        type="submit"
        className="px-2 ml-auto text-teal-900 bg-teal-400 rounded-lg dialog-close-button"
      >
        send
      </button>
    </form>
  );
}
