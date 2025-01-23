import React from 'react';
import './button.css';

export type ButtonProps<T extends React.ElementType> = {
  as?: T;
  testId?: string;
  className?: string;
  color?: 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
  size?: 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge';
} & React.ComponentPropsWithoutRef<T>;

const buttonStyle = {
  default: [
    'focus:ring-4',
    'focus:outline-none',
    'font-medium',
    'rounded-lg',
    'text-center',
  ],
};
const buttonSizes = {
  extraSmall: ['text-xs', 'px-3', 'py-2'],
  small: ['text-sm', 'px-3', 'py-2'],
  base: ['text-sm', 'px-5', 'py-2.5'],
  large: ['text-base', 'px-5', 'py-3'],
  extraLarge: ['text-base', 'px-6', 'py-3.5'],
};

const buttonTheme = {
  default: [
    'text-white',
    'bg-blue-700',
    'hover:bg-blue-800',
    'focus:ring-blue-300',
    'dark:bg-blue-600',
    'dark:hover:bg-blue-700',
    'dark:focus:ring-blue-800',
  ],
  alternative: [
    'text-gray-900',
    'bg-white',
    'border',
    'border-gray-200',
    'hover:bg-gray-100',
    'hover:text-blue-700',
    'focus:ring-gray-100',
    'dark:focus:ring-gray-700',
    'dark:bg-gray-800',
    'dark:text-gray-400',
    'dark:border-gray-600',
    'dark:hover:text-white',
    'dark:hover:bg-gray-700',
  ],
  dark: [
    'text-white',
    'bg-gray-800',
    'hover:bg-gray-900',
    'focus:ring-gray-300',
    'dark:bg-gray-800',
    'dark:hover:bg-gray-700',
    'dark:focus:ring-gray-700',
    'dark:border-gray-700',
  ],
  light: [
    'text-gray-900',
    'bg-white',
    'border',
    'border-gray-300',
    'hover:bg-gray-100',
    'focus:ring-gray-100',
    'dark:bg-gray-800',
    'dark:text-white',
    'dark:border-gray-600',
    'dark:hover:bg-gray-700',
    'dark:hover:border-gray-600',
    'dark:focus:ring-gray-700',
  ],
  green: [
    'text-white',
    'bg-green-700',
    'hover:bg-green-800',
    'focus:ring-green-300',
    'dark:bg-green-600',
    'dark:hover:bg-green-700',
    'dark:focus:ring-green-800',
  ],
  red: [
    'text-white',
    'bg-red-700',
    'hover:bg-red-800',
    'focus:ring-red-300',
    'dark:bg-red-600',
    'dark:hover:bg-red-700',
    'dark:focus:ring-red-800',
  ],
  yellow: [
    'text-white',
    'bg-yellow-400',
    'hover:bg-yellow-500',
    'focus:ring-yellow-300',
    'dark:focus:ring-yellow-900',
  ],
  purple: [
    'text-white',
    'bg-purple-700',
    'hover:bg-purple-800',
    'focus:ring-purple-300',
    'dark:bg-purple-600',
    'dark:hover:bg-purple-700',
    'dark:focus:ring-purple-800',
  ],
};

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
    ...buttonStyle.default,
    ...buttonSizes[size],
    ...buttonTheme[color],
    'ui-button',
  ]
    .filter(Boolean)
    .join(' ');

  return <Component {...props} className={buttonClassName} />;
};
