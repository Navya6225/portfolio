export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="mb-10 pt-24">
      {title && <h2 className="text-3xl font-bold mb-4 pb-6">{title}</h2>}
      {children}
    </section>
  );
}
