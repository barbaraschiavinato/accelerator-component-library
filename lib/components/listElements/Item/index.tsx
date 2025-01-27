import React from 'react';

export type ListItem = {
  name: string;
  data: {
    color: string;
    price: number;
  };
};

export const Item = ({ name, data }: ListItem) => {
  return (
    <li className="ui-flex ui-justify-between ui-gap-x-6 ui-py-5">
      <div className="ui-flex ui-min-w-0 ui-gap-x-4">
        <div className="ui-min-w-0 ui-flex-auto">
          <p className="ui-text-sm/6 ui-font-semibold ui-text-gray-900 dark:ui-text-white">
            {name}
          </p>
          <p className="ui-mt-1 ui-truncate ui-text-xs/5 ui-text-gray-500 dark:ui-text-gray-400">
            {data?.color}
          </p>
        </div>
      </div>
      <div className="ui-hidden ui-shrink-0 sm:ui-flex sm:ui-flex-col sm:ui-items-end">
        {data?.price && (
          <p className="ui-text-sm/6 ui-text-gray-900 dark:ui-text-white">{`$${data.price}`}</p>
        )}
      </div>
    </li>
  );
};
