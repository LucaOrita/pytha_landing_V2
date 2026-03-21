const badges = ['ISO', 'CMR', 'ADR', 'USER', 'FIATA'];

export default function DacodaTrustBar() {
  return (
    <section className="border-b border-gray-100 bg-white py-6">
      <div className="container flex flex-col items-center gap-4 px-4 sm:flex-row sm:gap-6 lg:px-6">
        <p className="text-dacoda-gray shrink-0 text-xs font-medium tracking-wide uppercase">
          Certificări și acreditări:
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="text-dacoda-navy border-dacoda-navy/30 rounded-full border px-3 py-1 text-xs font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
