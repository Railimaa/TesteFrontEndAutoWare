/* eslint-disable import/prefer-default-export */
import { emitCertificate } from './emitCertificate';
import { getAll } from './getAll';
import { getRecallByChassi } from './getRecallByChassi';

export const recallService = {
  getAll,
  getRecallByChassi,
  emitCertificate,
};
