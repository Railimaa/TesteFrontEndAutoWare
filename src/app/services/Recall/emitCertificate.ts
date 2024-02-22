/* eslint-disable import/prefer-default-export */
import { httpClient } from '../httpClient';

interface IEmitCertificateBody {
  idRecall: number;
  chassi: string;
  email: string;
}

export async function emitCertificate(body: IEmitCertificateBody) {
  const { data } = await httpClient.post('/Recall/EmitirCertificado', body);

  return data;
}
