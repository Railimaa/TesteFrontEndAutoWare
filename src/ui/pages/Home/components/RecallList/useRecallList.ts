/* eslint-disable import/prefer-default-export */
import React, { useDeferredValue, useMemo, useState } from 'react';

import { useRecall } from '@app/hooks/useRecall';
import { FormatDate } from '@app/utils/formatDate';

import { useRecallContext } from './RecallContext/useRecallContext';

export function useRecallList() {
  const {
    recalls,
    isInitialLoading,
    isError,
    refetch,
  } = useRecall();
  const { handleOpenFilterModal } = useRecallContext();

  const [searchInputValue, setSearchInputValue] = useState('');

  function handleChangeSearchInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInputValue(event.target.value);
  }

  const deferedValueSearch = useDeferredValue(searchInputValue);
  const normalizedSearch = useMemo(() => deferedValueSearch.toLowerCase(), [deferedValueSearch]);

  const filteredListRecalls = useMemo(() => recalls.filter((recall) => {
    const searchByTitle = recall.titulo.toLowerCase().includes(normalizedSearch);
    const searchByDescription = recall.descricao.toLowerCase().includes(normalizedSearch);
    const dateformat = FormatDate(new Date(recall.dataPublicacao));
    const searchByDate = dateformat.includes(normalizedSearch);

    return searchByTitle || searchByDescription || searchByDate;
  }), [recalls, normalizedSearch]);

  return {
    recalls,
    isInitialLoading,
    filteredListRecalls,
    searchInputValue,
    handleChangeSearchInputValue,
    handleOpenFilterModal,
    isError,
    refetch,
  };
}
