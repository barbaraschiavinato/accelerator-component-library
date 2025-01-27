import React, { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="ui-mx-auto ui-mt-10 ui-max-w-7xl ui-px-2 sm:ui-px-6 lg:ui-px-8">
      {children}
    </div>
  );
};
