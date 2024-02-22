/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { recallService } from '@app/services/Recall';

export function useRecall() {
  const {
    data, isLoading, isError, refetch,
  } = useQuery({
    queryKey: ['recall'],
    queryFn: recallService.getAll,
    staleTime: Infinity,
  });

  return {
    recalls: data ?? [],
    isInitialLoading: isLoading,
    isError,
    refetch,
  };
}
