/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */
import { Search } from 'lucide-react';
import React, {
  ComponentProps, forwardRef, useRef, useState,
} from 'react';

import { cn } from '@app/utils/cn';

interface IInputProps extends ComponentProps<'input'> {
}

export const InputSearch = forwardRef<HTMLInputElement, IInputProps>(({ ...props }, ref) => {
  const [visibleInput, setVisibleInput] = useState(false);
  const autoFocusVisibleInput = useRef<HTMLInputElement>(null);

  function handleFocusVisibleInput() {
    if (autoFocusVisibleInput.current) {
      autoFocusVisibleInput.current.focus();
      setVisibleInput(true);
    }
  }

  function handleBlurVisibleInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) {
      setVisibleInput(false);
    }
  }

  return (
    <div className="relative">
      <input
        {...props}
        ref={ref || autoFocusVisibleInput}
        onBlur={handleBlurVisibleInput}
        className={cn(
          'bg-zinc-950 text-zinc-100 px-[35px] h-[0px] w-[0px] rounded-md focus:border-zinc-100',
          visibleInput && 'border border-zinc-800 h-[48px] w-full animate-input-search transition-animate ease-in-out',
        )}
      />

      <button
        onClick={handleFocusVisibleInput}
        type="button"
        className={cn(
          'absolute top-[6px] left-[14px] animate-bounce transition-animation ease-in-out',
          visibleInput && 'animate-none top-[18px]',
        )}
      >
        <Search width={14} height={14} color="#fff" />
      </button>
    </div>
  );
});
