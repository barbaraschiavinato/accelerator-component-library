import React, { ReactNode } from 'react';

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <p className="ui-mb-5 ui-mt-2 ui-text-sm ui-text-red-600 dark:ui-text-red-500">
      <span className="ui-font-medium">{children}</span>
    </p>
  );
};
