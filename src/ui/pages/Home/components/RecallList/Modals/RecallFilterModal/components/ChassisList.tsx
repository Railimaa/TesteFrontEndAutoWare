/* eslint-disable import/prefer-default-export */
import { cn } from '@app/utils/cn';
import { chassis } from '@app/utils/constants';
import { FieldError } from '@ui/components/FieldError';
import { Button } from '@ui/components/ui/Button';

interface IChassisList {
  selectedChassi: string | undefined;
  handleSelectChassi: (chassi: string) => void;
  handleApplyFilter: () => void;
  isLoading: boolean;
}

export function ChassisList({
  selectedChassi, handleSelectChassi, handleApplyFilter, isLoading,
}: IChassisList) {
  return (
    <>
      {chassis.map((chassi) => (
        <button
          key={chassi.value}
          onClick={() => handleSelectChassi(chassi.value)}
          className={cn(
            'text-zinc-100/80 hover:bg-zinc-500/10 flex w-full text-left p-[10px] rounded-lg transition-all ease-in-out',
            selectedChassi === chassi.value ? '!bg-zinc-700' : '',
          )}
          type="button"
        >
          {chassi.name}
        </button>
      ))}

      {selectedChassi === undefined && (
      <FieldError message="Selecione um chassi" />
      )}

      <Button
        type="button"
        onClick={handleApplyFilter}
        isLoading={isLoading}
        disabled={selectedChassi === undefined}
      >
        Aplicar filtro
      </Button>

    </>
  );
}
