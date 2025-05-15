import { ButtonHTMLAttributes } from 'react';
import ctx from 'classnames';
import styles from './style.module.scss';

type ButtonVariant = 'primary';
type ButtonSize = 'sm' | 'md';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string; // or children
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export const Button = ({ title, size = 'md', variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button className={ctx(styles.base, styles[variant], styles[size])} {...rest}>
      {title}
    </button>
  );
};
