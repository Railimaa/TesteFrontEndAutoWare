/* eslint-disable import/prefer-default-export */
import { Skeleton } from './Skeleton';

export function SkeletonCustom() {
  return (
    <div className="p-4 border rounded-[12px] h-[120px] border-zinc-900">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[200px] h-[20px]" />

        <div className="flex flex-col gap-2 mt-[4px]">
          <Skeleton className="w-[300px] h-[14px]" />
          <Skeleton className="w-[100px] h-[10px]" />
        </div>
      </div>
    </div>
  );
}
