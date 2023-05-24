import { TTransaction } from '../types/data';

export const getTabNumber = (tabName: TTransaction['type']) => {
  switch (tabName) {
    case 'income':
      return 0;
    case 'outcome':
      return 1;
    case 'loan':
      return 2;
    case 'investment':
      return 3;
    default:
      break;
  }
};
