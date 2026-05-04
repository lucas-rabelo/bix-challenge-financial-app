export type RawTransaction = {
  date: number;
  amount: string;
  transaction_type: 'deposit' | 'withdraw';
  currency: string;
  account: string;
  industry: string;
  state: string;
}

export type Transaction = {
  date: number;
  amount: number;
  transactionType: 'deposit' | 'withdraw';
  currency: string;
  account: string;
  industry: string;
  state: string;
}