import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type TButtonProps = {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  to?: string;
  href?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  download?: string;
};

const Button = ({
  children,
  type = 'button',
  to,
  href,
  ariaLabel,
  onClick,
  disabled = false,
  download,
}: TButtonProps) => {
  const outerLink = href?.includes('.');
  const innerLink = href?.includes('#');
  const localFile = href?.includes('assets/files/');

  const buttonStyles =
    'inline-block flex justify-center items-center w-36 rounded-xl border-2 border-color-purple-700 bg-color-secondary p-2 font-vt323 text-2xl leading-none text-color-primary transition-colors duration-75 hover:border-color-purple-500 block hover:brightness-[105%]';

  {
    if (localFile) {
      return (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{
            scale: 0.97,
          }}
          tabIndex={-1}
        >
          <a
            href={href}
            download={download}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={`${buttonStyles} w-44`}
            tabIndex={0}
          >
            {children}
          </a>
        </motion.div>
      );
    } else if (outerLink) {
      return (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={buttonStyles}
          >
            {children}
          </a>
        </motion.div>
      );
    } else if (innerLink) {
      return (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <a href={href} target="_self" aria-label={ariaLabel} className={buttonStyles}>
            {children}
          </a>
        </motion.div>
      );
    } else if (to) {
      return (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Link to={to} aria-label={ariaLabel} className={buttonStyles}>
            {children}
          </Link>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <button
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}
            disabled={disabled}
            className={buttonStyles}
          >
            {children}
          </button>
        </motion.div>
      );
    }
  }
};

export default Button;
