import data from '@/presentation/data/transactions.json';
import { normalizeTransaction } from '@/presentation/utils/normalize-transaction';
import type { RawTransaction, Transaction } from './types';

let cache: Transaction[] | null = null

export function getTransactions(): Transaction[] {
  if (!cache) {
    cache = (data as RawTransaction[]).map(normalizeTransaction)
  }

  return cache;
}