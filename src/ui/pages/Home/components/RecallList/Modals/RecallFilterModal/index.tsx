/* eslint-disable import/prefer-default-export */

import { Modal } from '@ui/components/Modal';
import { SkeletonCustom } from '@ui/components/ui/SkeletonCustom';

import { IssueRecallCertificateModal } from '../IssueRecallCertificateModal';

import { ChassisList } from './components/ChassisList';
import { RecallsFilterList } from './components/RecallsFilterList';
import { useRecallFilterModal } from './useRecallFilterModal';

export function RecallFilterModal() {
  const {
    recalls,
    isLoading,
    selectedChassi,
    handleSelectChassi,
    openFilterModal,
    handleCloseFilterModal,
    handleOpenIssueRecallCertificateModal,
    handleCloseIssueRecallCertificateModal,
    openIssueRecallCertificateModal,
    handleApplyFilter,
    recallsByChassiSearch,
  } = useRecallFilterModal();

  if (openIssueRecallCertificateModal) {
    return (
      <IssueRecallCertificateModal
        handleCloseIssueRecallCertificateModal={handleCloseIssueRecallCertificateModal}
        recallsByChassiSearch={recallsByChassiSearch}
        recallsFiltered={recalls}
      />
    );
  }

  return (
    <Modal
      open={openFilterModal}
      handleCloseModal={handleCloseFilterModal}
      title="Filtrar"
      rightAction
    >
      <div className="space-y-4">
        <ChassisList
          selectedChassi={selectedChassi}
          handleSelectChassi={handleSelectChassi}
          handleApplyFilter={handleApplyFilter}
          isLoading={isLoading}
        />

        {isLoading && (
          <div className="space-y-4">
            <SkeletonCustom />
            <SkeletonCustom />
            <SkeletonCustom />
          </div>
        )}

        {!isLoading && (
          <RecallsFilterList
            recalls={recalls}
            selectedChassi={selectedChassi}
            handleOpenIssueRecallCertificateModal={handleOpenIssueRecallCertificateModal}
          />
        )}
      </div>
    </Modal>
  );
}
