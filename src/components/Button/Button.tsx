import React from 'react';
import { Link } from 'react-router-dom';

type TButtonProps = {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  to?: string;
  href?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
};

const Button = ({
  children,
  type = 'button',
  to,
  href,
  ariaLabel,
  onClick,
  disabled = false,
}: TButtonProps) => {
  const outerLink = href?.includes('.');
  const innerLink = href?.includes('#');

  const buttonStyles =
    'w-36 rounded-xl border-2 border-color-purple-700 bg-color-secondary p-2 font-vt323 text-2xl leading-none text-color-primary transition-colors duration-75 hover:border-color-purple-800 hover:bg-color-secondary/70 hover:text-color-purple-800 block';

  {
    if (outerLink) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={buttonStyles}
        >
          {children}
        </a>
      );
    } else if (innerLink) {
      return (
        <a href={href} target="_self" aria-label={ariaLabel} className={buttonStyles}>
          {children}
        </a>
      );
    } else if (to) {
      return (
        <Link to={to} aria-label={ariaLabel} className={buttonStyles}>
          {children}
        </Link>
      );
    } else {
      return (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          disabled={disabled}
          className={buttonStyles}
        >
          {children}
        </button>
      );
    }
  }
};

export default Button;
