export const ReferenceClientSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-10">Trusted By Industry Leaders</h2>
      <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all justify-center">
        {["GlobalCorp", "Future Systems", "Nexus Ltd", "Apex Industries"].map((c, i) => (
          <div key={i} className="text-2xl font-black">{c}</div>
        ))}
      </div>
    </section>
  );
};

export default ReferenceClientSection;
