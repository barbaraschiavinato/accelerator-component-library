import React, { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10">
      {children}
    </div>
  );
};
