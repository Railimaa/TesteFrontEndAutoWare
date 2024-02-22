/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

import { UseGetRecallByChassi } from '@app/hooks/useRecallByChassi';
import { RecallIsbeingingFilter } from '@app/types/RecallIsBeingingFilter';

import { useRecallContext } from '../../RecallContext/useRecallContext';

export function useRecallFilterModal() {
  const {
    openFilterModal,
    handleCloseFilterModal,
  } = useRecallContext();

  const [openIssueRecallCertificateModal, setOpenIssueRecallCertificateModal] = useState(false);
  const [selectedChassi, setSelectedChassi] = useState<string | undefined>(undefined);

  const { recalls, isLoading, refetch } = UseGetRecallByChassi(selectedChassi!);

  const [recallsByChassiSearch, setRecallsByChassiSearch] = useState<RecallIsbeingingFilter>({
    recalls: [],
    chassi: undefined,
  });

  function handleOpenIssueRecallCertificateModal() {
    setOpenIssueRecallCertificateModal(true);
  }

  const handleApplyFilter = useCallback(() => {
    refetch()
      .then((result) => {
        if (result.data) {
          setRecallsByChassiSearch((prevState) => ({
            ...prevState,
            recalls: result.data,
          }));
        }
      })
      .catch(() => {
        toast.error('Ocorreu um erro...');
      });
  }, [refetch]);

  function handleSelectChassi(chassi: string) {
    setSelectedChassi((prevState) => (prevState === chassi ? undefined : chassi));
    setRecallsByChassiSearch((prevState) => ({
      ...prevState,
      chassi,
    }));
  }

  function handleCloseIssueRecallCertificateModal() {
    setOpenIssueRecallCertificateModal(false);
  }

  return {
    recalls,
    isLoading,
    refetch,
    selectedChassi,
    handleSelectChassi,
    openFilterModal,
    handleCloseFilterModal,
    openIssueRecallCertificateModal,
    handleOpenIssueRecallCertificateModal,
    handleCloseIssueRecallCertificateModal,
    handleApplyFilter,
    recallsByChassiSearch,
  };
}
