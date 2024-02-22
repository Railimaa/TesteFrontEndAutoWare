/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */
import React from 'react';

import { cn } from '@app/utils/cn';

import { FieldError } from '../FieldError';

export interface IInputProps extends React.ComponentProps<'input'>{
  error?: string;
  name?: string;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({
    className, error, name, placeholder, id, ...props
  }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          placeholder=" "
          className={cn(
            'bg-zinc-950',
            'w-full',
            'px-3',
            'h-[48px]',
            'rounded-lg',
            'border',
            'border-zinc-700',
            'text-zinc-200',
            'pt-4',
            'peer',
            'placeholder-shown:pt-0',
            'focus:border-zinc-200',
            'transition-all',
            'outline-none',
            error && '!border-red-900',
            className,
          )}

        />

        <label
          htmlFor={inputId}
          className="absolute
          text-zinc-100/80
          text-[11px]
          left-[13px] top-2 pointer-events-none
          peer-placeholder-shown:text-[14px] peer-placeholder-shown:top-3.5
          transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <FieldError message={error} />
        )}
      </div>
    );
  },
);
