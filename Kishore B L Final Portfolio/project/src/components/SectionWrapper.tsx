import type { PropsWithChildren } from 'react';

type SectionWrapperProps = PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}>;

const SectionWrapper = ({ id, eyebrow, title, subtitle, children }: SectionWrapperProps) => {
  return (
    <section id={id} className="section-spacing">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl space-y-2">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
        {children}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10" />
      </div>
    </section>
  );
};

export default SectionWrapper;
