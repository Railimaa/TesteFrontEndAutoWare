/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import { ComponentProps } from 'react';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({
  isLoading, children, disabled, ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className="
        h-[40px] w-full rounded-xl text-zinc-950 font-bold bg-zinc-200 hover:bg-zinc-100/80
        transition-all ease-in-out flex items-center justify-center disabled:opacity-[0.5] disabled:cursor-not-allowed
        disabled:hover:bg-[none]
      "
    >
      {!isLoading && (
        children
      )}

      {isLoading && (
        <div
          className="
          w-[20px] h-[20px] border border-zinc-900 border-r-[2px]
          border-r-slate-50 rounded-full animate-spin"
        />
      )}
    </button>
  );
}
