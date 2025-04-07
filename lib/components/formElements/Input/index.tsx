import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`ui-block ui-w-full ui-rounded-lg ui-border ui-border-gray-300 ui-bg-gray-50 ui-p-2.5 ui-font-noto ui-text-sm ui-text-gray-900 focus:ui-border-blue-500 focus:ui-ring-blue-500 dark:ui-border-gray-600 dark:ui-bg-gray-700 dark:ui-text-white dark:focus:ui-border-blue-500 dark:focus:ui-ring-blue-500 ${className || ''}`}
    />
  );
};
