import * as HoverCard from "@radix-ui/react-hover-card";
import * as PopOver from "@radix-ui/react-popover";

export default function CustomHoverCard({ skill }: { skill: any }) {
  return (
    <PopOver.Root>
      <section className="relative p-[2.5px] overflow-hidden rounded-lg group ">
        <div className="absolute transition-all duration-200 ease-in-out opacity-80 inset-1 from-gray-300 via-gray-700 to-purple-900 md:animate-spinSlow animate-spin filter blur-2xl bg-gradient-conic"></div>
        <PopOver.Trigger className="relative flex items-center justify-center py-4 leading-none text-gray-600 bg-gray-100 divide-x divide-gray-600 rounded-lg cursor-default px-7">
          <span className="flex items-center justify-center pr-0 md:pr-5 ">
            <div className="grid group-hover:animate-wiggle place-items-center">
              <img src={skill.src} alt={skill.alt} width={50} height={50} />
            </div>
          </span>
          <span className="hidden pl-5 md:inline">{skill.name}</span>
        </PopOver.Trigger>
      </section>
      <PopOver.Portal>
        <PopOver.Content className="p-6 text-gray-900 bg-gray-100 shadow-lg data-[side=bottom]:animate-slideUpAndFade rounded-lg max-w-sm">
          <h2 className="text-lg tracking-tight text-gray-800 lg:text-xl text-semibold first-letter:capitalize">
            {skill.name}
            <span className="inline-block h-full ml-2 animate-bounceSide">
              &rarr;
            </span>
          </h2>
          <p className="text-gray-600 underline">
            <a href={skill.href}>find out more</a>
          </p>
          <PopOver.Arrow className="shadow-md fill-gray-100" />
        </PopOver.Content>
      </PopOver.Portal>
    </PopOver.Root>
  );
}
