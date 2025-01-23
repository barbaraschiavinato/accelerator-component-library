import React, { ReactNode } from 'react';

export const List = ({ children }: { children: ReactNode }) => {
  return <ul className="divide-y divide-gray-100">{children}</ul>;
};
