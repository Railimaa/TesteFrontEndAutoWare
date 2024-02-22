/* eslint-disable import/prefer-default-export */
import { IRecall } from '@app/types/Recall';
import { FormatDate } from '@app/utils/formatDate';

interface IRecallCardProps {
  recalls: IRecall[];
}

export function RecallCard({ recalls }: IRecallCardProps) {
  return (
    recalls.map((recall) => (
      <div key={recall.id} className="flex flex-col w-full p-4 rounded-[12px] border border-zinc-900 mt-[10px]">
        <span className="text-zinc-100">{recall.titulo}</span>

        <div className="mt-[4px]">
          <span className="text-zinc-400">{recall.descricao}</span>
          <small className="text-zinc-400 block">{FormatDate(new Date(recall.dataPublicacao))}</small>
        </div>
      </div>
    ))
  );
}
