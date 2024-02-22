import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

interface IRecallContextProvider {
  openFilterModal: boolean;
  handleOpenFilterModal: () => void;
  handleCloseFilterModal: () => void;
}

export const RecallContext = createContext({} as IRecallContextProvider);

export function RecallProvider({ children }: { children: React.ReactNode }) {
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const handleOpenFilterModal = useCallback(() => {
    setOpenFilterModal(true);
  }, []);

  const handleCloseFilterModal = useCallback(() => {
    setOpenFilterModal(false);
  }, []);

  const recallContextValues = useMemo(
    () => ({
      openFilterModal,
      handleOpenFilterModal,
      handleCloseFilterModal,
    }),
    [
      openFilterModal,
      handleOpenFilterModal,
      handleCloseFilterModal,
    ],
  );

  return (
    <RecallContext.Provider value={recallContextValues}>
      {children}
    </RecallContext.Provider>
  );
}
