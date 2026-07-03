export default function Rail({ label }: { label?: string }) {
  return (
    <div className="container-page">
      <div className="flex items-center gap-4 py-2">
        <div className="rail-roller shrink-0" />
        <div className="rail-track flex-1" />
        {label ? (
          <span className="eyebrow text-steel-light shrink-0">{label}</span>
        ) : null}
      </div>
    </div>
  );
}
