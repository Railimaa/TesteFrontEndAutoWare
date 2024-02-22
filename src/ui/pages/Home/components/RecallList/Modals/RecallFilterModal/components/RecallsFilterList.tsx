/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */
import { IRecallByChassi } from '@app/types/RecallByChassi';
import { FormatDate } from '@app/utils/formatDate';

interface IRecallsFilterList {
  recalls: IRecallByChassi[];
  selectedChassi: string | undefined;
  handleOpenIssueRecallCertificateModal: () => void;
}

export function RecallsFilterList({
  recalls,
  selectedChassi,
  handleOpenIssueRecallCertificateModal,
}: IRecallsFilterList) {
  const visibleCertificate = recalls.length > 0;

  return (
    <>
      {recalls.map((recall) => (
        <div
          key={recall.id}
          className="flex flex-col w-full p-4 rounded-[12px] border border-zinc-900 relative"
        >
          <span className="text-zinc-100 font-semibold">
            {recall.concessionaria && (
              recall.concessionaria
            )}
          </span>

          <div className="mt-[5px] flex flex-col">

            <span className="text-zinc-50 opacity-[0.8] text-[14px] leading-1">{recall.titulo}</span>

            <span className="text-zinc-400 text-[14px] leading-1">{recall.descricao}</span>

            <div className="flex items-center gap-1">
              <span className="text-zinc-400 text-[12px] leading-1">Data de publicaçao:</span>

              <small className="text-zinc-400">
                {FormatDate(new Date(recall.dataPublicacao))}
              </small>
            </div>

            {recall.dataExecucao && (
            <div className="flex items-center gap-1">
              <span className="text-zinc-400 text-[12px] leading-1">Data de execução:</span>

              <small className="text-zinc-400">
                {FormatDate(new Date(recall.dataExecucao))}
              </small>
            </div>
            )}

          </div>
        </div>
      ))}

      {visibleCertificate && (
        <div className="absolute top-[10px] right-[10px]">
          <button
            onClick={handleOpenIssueRecallCertificateModal}
            type="button"
            className="rounded-sm h-[22px] text-zinc-950 font-bold bg-zinc-200
            animate-pulse transition-all ease-in-out flex items-center justify-center disabled:opacity-[0.5] disabled:cursor-not-allowed
            disabled:hover:bg-[none]"
            disabled={selectedChassi === undefined}
          >
            Emitir certificado
          </button>
        </div>
      )}
    </>

  );
}
