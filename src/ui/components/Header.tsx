/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { Heart } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@app/utils/cn';

export function Header() {
  const [heartRed, setHeartRed] = useState(false);

  return (
    <div className="bg-black w-full h-[80px] flex items-center justify-center">
      <div className="w-full max-w-[800px] flex items-center justify-between px-2  md:px-0">
        <h1 className="text-[30px] text-slate-50 leading-3">AutoWare</h1>

        <button
          onClick={() => setHeartRed((prevState) => (
            !prevState
          ))}
          className={cn(
            'text-zinc-200 w-[30px] h-{30px}',
            heartRed && 'text-red-500 animate-spin',
          )}
          type="button"
        >
          <Heart width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
