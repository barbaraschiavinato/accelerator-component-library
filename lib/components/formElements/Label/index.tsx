import React from 'react';

export const Label = ({ ...props }) => {
  return (
    <label
      {...props}
      className="ui-mb-2 ui-block ui-text-sm ui-font-medium ui-text-gray-900 dark:ui-text-white"
    />
  );
};
