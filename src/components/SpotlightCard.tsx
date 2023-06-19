import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
export default function SpotlightCard({
  icon,
}: {
  icon: { src: string; alt: string; title: string; description: string };
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { top, left } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative max-w-md px-10 py-16 mx-auto border rounded-lg lg:px-10 lg:py-16 md:px-4 md:py-8 group md:m-0"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 transition-all duration-300 ease-in-out bg-gray-100 opacity-0 pointer-events-none group-hover:opacity-100 "
        style={{
          background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(150, 152, 146, 0.15),
                transparent 80%
              )
            `,
        }}
      />
      <section>
        <div className="flex items-center justify-center">
          <img src={icon.src} alt={icon.alt} width={100} height={100} />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-gray-700 truncate md:text-4xl first-letter:capitalize">
          {icon.title}
        </h2>
        <p className="mt-2 leading-7 text-gray-600">{icon.description}</p>
      </section>
    </div>
  );
}
