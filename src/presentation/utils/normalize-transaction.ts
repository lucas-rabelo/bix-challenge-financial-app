import type { RawTransaction, Transaction } from "../services/transactions/types";

export function normalizeTransaction(raw: RawTransaction): Transaction {
  return {
    date: raw.date,
    amount: Number(raw.amount) / 100,
    transactionType: raw.transaction_type,
    currency: raw.currency,
    account: raw.account,
    industry: raw.industry,
    state: raw.state,
  }
}