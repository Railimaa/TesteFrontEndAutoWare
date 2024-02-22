/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';

import { RecallContext } from '.';

export function useRecallContext() {
  return useContext(RecallContext);
}
