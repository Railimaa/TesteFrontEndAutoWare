/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { recallService } from '@app/services/Recall';

export function UseGetRecallByChassi(chassi: string) {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['recall', 'recallByChassi'],
    queryFn: () => recallService.getRecallByChassi(chassi),
    enabled: false,
    staleTime: 0,
  });

  return { recalls: data ?? [], refetch, isLoading: isFetching };
}
