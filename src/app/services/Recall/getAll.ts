/* eslint-disable import/prefer-default-export */
import { IRecall } from '@app/types/Recall';

import { httpClient } from '../httpClient';

type responseDataRecall = IRecall[];

export async function getAll() {
  const { data } = await httpClient.get<responseDataRecall>('/Recall');

  return data;
}
