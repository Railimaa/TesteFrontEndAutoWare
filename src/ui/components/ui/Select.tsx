/* eslint-disable react/no-unused-prop-types */

import React from 'react';

/* eslint-disable import/prefer-default-export */
interface ISelectProps {
  value: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
}

export function Select({ value, onChange, options }: ISelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="w-full h-[48px] rounded-lg px-2 bg-zinc-950 text-zinc-200 border
      border-zinc-700 focus:border-zinc-200"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value} className="bg-zinc-950 text-zinc-200 ">
          {option.label}
        </option>
      ))}
    </select>
  );
}
