import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type GlassButtonProps = {
  children: ReactNode;
  className?: string;
};

type AnchorProps = GlassButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = GlassButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const GlassButton = ({ children, className, href, ...rest }: AnchorProps | ButtonProps) => {
  const classes = `glass-button ${className ?? ''}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default GlassButton;
