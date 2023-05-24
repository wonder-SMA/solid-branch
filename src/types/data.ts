export type TTransaction = {
  type: 'income' | 'outcome' | 'loan' | 'investment';
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export type TData = {
  total: number;
  data: TTransaction[];
}
