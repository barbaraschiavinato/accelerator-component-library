import React, { ReactNode } from 'react';

export const Heading = ({
  children,
  as = 'h1',
  size = '3xl',
  marginBottom = 5,
  className,
}: {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  className?: string;
  marginBottom?: number | string;
}) => {
  const Component = as;
  return (
    <Component
      className={`ui-mb-${marginBottom} ui-text-${size} ui-font-bold${className ? ` ${className}` : ''}`}
    >
      {children}
    </Component>
  );
};
