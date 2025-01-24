import React from 'react';
import { variants } from './configs/variants';
import './button.css';

export type ButtonProps<T extends React.ElementType> = {
  as?: T;
  testId?: string;
  className?: string;
  color?:
    | 'default'
    | 'alternative'
    | 'dark'
    | 'light'
    | 'green'
    | 'red'
    | 'yellow'
    | 'purple';
  size?: 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge';
} & React.ComponentPropsWithoutRef<T>;

export const Button = <T extends React.ElementType = 'button'>({
  as,
  className,
  color = 'default',
  size = 'base',
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';

  const buttonClassName = [
    className,
    ...variants.styles.default,
    ...variants.sizes[size],
    ...variants.themes[color],
    'ui-button',
  ]
    .filter(Boolean)
    .join(' ');

  return <Component {...props} className={buttonClassName} />;
};
