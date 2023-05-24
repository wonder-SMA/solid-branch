import { TTransaction } from '../types/data';

export const tabTypeMap = new Map<TTransaction['type'], string>([
    ['income', 'Income'],
    ['outcome', 'Outcome'],
    ['loan', 'Loans'],
    ['investment', 'Investments'],
  ],
);
