/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */
import { BadgeAlert, X } from 'lucide-react';

interface INotChassi {
  handleCloseIssueRecallCertificateModal: () => void;
}

export function NotChassi({
  handleCloseIssueRecallCertificateModal,
}: INotChassi) {
  return (
    <div className="bg-zinc-950 top-0 bottom-0 left-0 right-0 fixed z-[3000]">
      <div className="relative">
        <button
          className="absolute top-[12px] left-[10px]"
          type="button"
          onClick={handleCloseIssueRecallCertificateModal}
        >
          <X color="#fff" width={30} height={30} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-[140px] gap-3 text-zinc-200">
        <BadgeAlert width={30} height={30} />
        <span className="text-sm leading-3">Nenhum recall associado a esse chassi.</span>
      </div>
    </div>
  );
}
