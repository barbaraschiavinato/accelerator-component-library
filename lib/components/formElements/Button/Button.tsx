import React, { forwardRef } from 'react';
import { variants } from './configs/variants';
import './button.css';

export type ButtonColor =
  | 'default'
  | 'alternative'
  | 'dark'
  | 'light'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple';

export type ButtonSize =
  | 'extraSmall'
  | 'small'
  | 'base'
  | 'large'
  | 'extraLarge';

export type ButtonShape = 'default' | 'pill';

export type ButtonPropsBasics = {
  as?: 'button' | 'a' | 'input';
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  shape?: ButtonShape;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export type ButtonProps = ButtonPropsBasics &
  (
    | (JSX.IntrinsicElements['a'] & { as?: 'a' })
    | (JSX.IntrinsicElements['button'] & { as?: 'button' })
    | (JSX.IntrinsicElements['input'] & { as?: 'input' })
  );

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLInputElement,
  ButtonProps
>(function ForwardedButton(
  {
    as = 'button',
    className,
    color = 'default',
    size = 'base',
    shape = 'default',
    children,
    icon = null,
    ...rest
  },
  ref,
) {
  const buttonClassName = [
    className,
    ...variants.styles.default,
    ...variants.sizes[size],
    ...variants.themes[color],
    ...variants.shapes[shape],
    'ui-button',
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'a') {
    return (
      <a
        {...(rest as JSX.IntrinsicElements['a'])}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={buttonClassName}
      >
        {icon}
        {children}
      </a>
    );
  }

  if (as === 'input') {
    return (
      <input
        {...(rest as JSX.IntrinsicElements['input'])}
        ref={ref as React.Ref<HTMLInputElement>}
        className={buttonClassName}
        type={rest.type || 'button'}
        value={children as string}
      />
    );
  }

  return (
    <button
      {...(rest as JSX.IntrinsicElements['button'])}
      ref={ref as React.Ref<HTMLButtonElement>}
      className={buttonClassName}
    >
      {icon}
      {children}
    </button>
  );
});

Button.displayName = 'Button';
