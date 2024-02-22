import { IRecallByChassi } from './RecallByChassi';

export type RecallIsbeingingFilter = {
  recalls: [] | IRecallByChassi[],
  chassi: string | undefined;
}
