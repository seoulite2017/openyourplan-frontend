import { ButtonHTMLAttributes, ReactNode } from 'react';
import ctx from 'classnames';
import styles from './style.module.scss';

type ButtonVariant = 'primary';
type ButtonSize = 'sm' | 'md';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  storyBookClassName?: string;
};

export const Button = ({
  children,
  size = 'md',
  variant = 'primary',
  storyBookClassName,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={ctx(
        styles.base,
        styles[variant],
        styles[size],
        storyBookClassName && styles[storyBookClassName],
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
