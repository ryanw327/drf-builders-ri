type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-black uppercase tracking-[0.16em] ${light ? "text-orange-300" : "text-orange-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {copy ? <p className={`mt-4 text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>{copy}</p> : null}
    </div>
  );
}
