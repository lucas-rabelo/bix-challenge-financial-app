import data from '@/presentation/data/transactions.json';
import type { RawTransaction } from "../services/transactions/types";
import { normalizeTransaction } from './normalize-transaction'

export function getOptions() {
  const dataNormalized = (data as RawTransaction[]).map(normalizeTransaction);

  const accounts = [...new Set(dataNormalized.map((t) => t.account))];
  const industries = [...new Set(dataNormalized.map((t) => t.industry))];
  const states = [...new Set(dataNormalized.map((t) => t.state))];

  return {
    accounts,
    industries,
    states,
  }
}