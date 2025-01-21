import { ReactNode } from 'react';

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500 mb-5">
      <span className="font-medium">{children}</span>
    </p>
  );
};
