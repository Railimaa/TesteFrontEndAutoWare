/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { Controller } from 'react-hook-form';

import { IRecallByChassi } from '@app/types/RecallByChassi';
import { RecallIsbeingingFilter } from '@app/types/RecallIsBeingingFilter';
import { Modal } from '@ui/components/Modal';
import { Button } from '@ui/components/ui/Button';
import { Input } from '@ui/components/ui/Input';
import { Select } from '@ui/components/ui/Select';

import { NotChassi } from './notChassis';
import { useIssueRecallCertificateModal } from './useIssueRecallCertificateModal';

interface IIssueRecallCertificateModalProps {
  handleCloseIssueRecallCertificateModal: () => void;
  recallsByChassiSearch: RecallIsbeingingFilter;
  recallsFiltered: IRecallByChassi[];
}

export function IssueRecallCertificateModal({
  handleCloseIssueRecallCertificateModal,
  recallsByChassiSearch,
  recallsFiltered,
}: IIssueRecallCertificateModalProps) {
  const {
    handleSubmit,
    register,
    errors,
    isLoading,
    control,
    filteredChassis,
    filteredRecalls,
  } = useIssueRecallCertificateModal(
    {
      handleCloseIssueRecallCertificateModal,
      recallsByChassiSearch,
      recallsFiltered,
    },
  );

  const withoutRememberingAssociatedChassis = recallsFiltered.filter((recall) => !recall.dataExecucao);

  return (
    <Modal
      open
      handleCloseModal={handleCloseIssueRecallCertificateModal}
      title="Emitir certificado"
    >

      {withoutRememberingAssociatedChassis.length > 1 && (
        <NotChassi
          handleCloseIssueRecallCertificateModal={
            handleCloseIssueRecallCertificateModal
          }
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Controller
          control={control}
          name="idRecall"
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              onChange={onChange}
              options={filteredRecalls}
            />
          )}
        />

        <Controller
          control={control}
          name="chassi"
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              onChange={onChange}
              options={filteredChassis}
            />
          )}
        />

        <Input placeholder="E-mail" {...register('email')} error={errors.email?.message} />

        <Button
          isLoading={isLoading}
          className="w-full"
        >
          Emitir certificado
        </Button>
      </form>

    </Modal>
  );
}
