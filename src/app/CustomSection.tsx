type SkillsSectionProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};
export default function CustomSection({
  title,
  description,
  children,
}: SkillsSectionProps) {
  return (
    <>
      <h2 className="mt-10 text-2xl font-semibold tracking-wide text-gray-800 first-letter:capitalize">
        {title}
      </h2>
      <section>
        <p className="leading-7 text-gray-700/90">{description}</p>
        {children}
      </section>
    </>
  );
}
