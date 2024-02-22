/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';

import { recallService } from '@app/services/Recall';

export function useEmitCertificate() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: recallService.emitCertificate,
  });

  return { handleEmitCertificate: mutateAsync, isLoading: isPending };
}
