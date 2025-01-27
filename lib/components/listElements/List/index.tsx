import React, { ReactNode } from 'react';

export const List = ({ children }: { children: ReactNode }) => {
  return <ul className="ui-divide-y ui-divide-gray-100">{children}</ul>;
};
