import React from 'react';

type ButtonProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Button = <T extends React.ElementType = 'button'>({
  as,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      {...props}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    />
  );
};
