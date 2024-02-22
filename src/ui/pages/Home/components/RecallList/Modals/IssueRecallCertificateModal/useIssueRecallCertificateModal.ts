/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useEmitCertificate } from '@app/hooks/useEmitCertificate';
import { IRecallByChassi } from '@app/types/RecallByChassi';
import { RecallIsbeingingFilter } from '@app/types/RecallIsBeingingFilter';
import { chassis } from '@app/utils/constants';

import { useRecallContext } from '../../RecallContext/useRecallContext';

interface IUseIssueRecallCertificateModal {
  handleCloseIssueRecallCertificateModal: () => void;
  recallsByChassiSearch: RecallIsbeingingFilter;
  recallsFiltered: IRecallByChassi[];
}

export function useIssueRecallCertificateModal({
  handleCloseIssueRecallCertificateModal,
  recallsByChassiSearch,
  recallsFiltered,
}: IUseIssueRecallCertificateModal) {
  const { handleCloseFilterModal } = useRecallContext();
  const { handleEmitCertificate, isLoading } = useEmitCertificate();

  const filteredChassis = chassis
    .filter((chassi) => chassi.value === recallsByChassiSearch.chassi)
    .map((chassi) => ({
      label: chassi.name,
      value: chassi.value,
    }));

  const filteredRecalls = recallsFiltered
    .filter((recall) => recall.dataExecucao)
    .map((recall) => ({
      label: recall.titulo,
      value: recall.id,
    }));

  const defaultRecall = recallsFiltered
    .filter((recall) => recall.dataExecucao)
    .map((recall) => recall.id.toString());

  const schema = z.object({
    idRecall: z.string().min(1, 'Informe o recall.'),
    chassi: z.string().min(5, 'Informe o chassi.'),
    email: z.string().email('Informe um e-mail válido.'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      chassi: recallsByChassiSearch.chassi,
      idRecall: defaultRecall[0],
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await handleEmitCertificate({
        ...data,
        idRecall: Number(data.idRecall),
      });

      handleCloseFilterModal();
      handleCloseIssueRecallCertificateModal();
      reset();
      toast.success('Certificado emitido!', {
        duration: 2000,
        style: {
          background: '#000',
          color: '#ffff',
        },
      });
    } catch {
      toast.error('Erro ao emitir certificado', {
        duration: 2000,
        style: {
          background: '#000',
          color: '#ffff',
        },
      });
    }
  });

  return {
    handleSubmit,
    register,
    control,
    errors,
    isLoading,
    filteredChassis,
    filteredRecalls,
  };
}
