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
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            {name}
          </p>
          <p className="mt-1 truncate text-xs/5 text-gray-500 dark:text-gray-400">
            {data?.color}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        {data?.price && (
          <p className="text-sm/6 text-gray-900 dark:text-white">{`$${data.price}`}</p>
        )}
      </div>
    </li>
  );
};
