/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */

import { cn } from '@app/utils/cn';

export function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={cn('animate-pulse bg-zinc-900 rounded-md', className)}
    />
  );
}
