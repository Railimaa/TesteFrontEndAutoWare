/* eslint-disable import/prefer-default-export */
import { IRecallByChassi } from '@app/types/RecallByChassi';

import { httpClient } from '../httpClient';

type ResponseGetRecallByChassi = IRecallByChassi[];

export async function getRecallByChassi(chassi: string) {
  const { data } = await httpClient.get<ResponseGetRecallByChassi>(`/Recall/ListRecallByChassi/${chassi}`);

  return data;
}
