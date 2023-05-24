import { TRawTransaction } from '../data';

export const getRandomNumber = (amount: TRawTransaction['amount']) => {
  const type = amount.split('(')[0];
  const data = amount.split('(')[1].split(', ');

  const randomNumber = Math.random() * (+data[1] - +data[0] + 1) + +data[0];

  if (randomNumber > +data[0] && randomNumber < +data[1]) {
    const digitCount = type === 'floating' ? parseInt(data[2]) : 0;
    return +randomNumber.toFixed(digitCount);
  }

  return Math.floor(randomNumber);
};
