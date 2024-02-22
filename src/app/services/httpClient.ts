/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { delay } from '@app/utils/delay';

export const httpClient = axios.create({
  baseURL: 'https://testetecnico.autoware.com.br',
});

httpClient.interceptors.response.use(async (data) => {
  await delay(500);

  return data;
});
