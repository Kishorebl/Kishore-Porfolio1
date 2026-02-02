import type { HTMLAttributes, PropsWithChildren } from 'react';

type GlassCardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  className?: string;
};

const GlassCard = ({ className, children, ...rest }: GlassCardProps) => {
  return (
    <div className={`glass-card ${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};

export default GlassCard;
