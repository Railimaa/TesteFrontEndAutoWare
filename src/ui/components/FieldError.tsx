import { XCircle } from 'lucide-react';

/* eslint-disable import/prefer-default-export */
export function FieldError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1">
      <XCircle height={16} width={16} className="text-red-300" />
      <small className="text-sm leading-3 text-red-300">{message}</small>
    </div>
  );
}
