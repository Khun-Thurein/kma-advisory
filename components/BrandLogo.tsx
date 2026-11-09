type BrandLogoProps = {
  markOnly?: boolean;
  className?: string;
};

export function LegRowMark({
  className = "h-10 w-16",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        WebkitMaskImage: "url('/images/kma-leg-row.png')",
        maskImage: "url('/images/kma-leg-row.png')",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
      aria-hidden="true"
    />
  );
}

export function BrandLogo({
  markOnly = false,
  className = "",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LegRowMark className="h-11 w-[4.75rem]" />
      {markOnly ? null : (
        <span className="leading-none">
          <span className="block text-[1.05rem] font-semibold tracking-[-0.035em]">
            KMA Advisory
          </span>
          <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.18em] opacity-70">
            Australia
          </span>
        </span>
      )}
    </span>
  );
}
