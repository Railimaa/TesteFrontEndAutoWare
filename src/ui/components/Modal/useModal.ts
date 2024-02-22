/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';

export function useModal(open: boolean, handleCloseModal: () => void) {
  const [shoulderRender, setShoulderRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShoulderRender(true);
    }

    let timeoutId: NodeJS.Timeout;
    if (!open) {
      timeoutId = setTimeout(() => {
        setShoulderRender(false);
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [open]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleCloseModal]);

  function handleOutsideClickModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
  }

  return {
    shoulderRender,
    handleOutsideClickModal,
  };
}
