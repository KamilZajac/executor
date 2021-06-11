import {ExecLogDocument} from '@executor/schemas';

export interface ExecLogCollectionResponse {
  total: number;
  pageSize: number;
  page: number;
  totalPages: number;
  entries: ExecLogDocument[]
}
