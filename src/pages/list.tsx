import { FC, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRandomNumber } from '../helpers/get-random-number';
import Table from '../components/elements/table/table';
import { data } from '../data';
import { TTabNumber } from '../types/tab-number';

const ListPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tableData = useMemo(() => (
    data?.data.map(item => ({ ...item, amount: getRandomNumber(item.amount) }))
  ), [data]);

  const onClick = useCallback((tabNumber: TTabNumber) => {
    setSearchParams(new URLSearchParams(`tab=${tabNumber}`));
  }, []);

  return (
    <Table
      data={tableData}
      tabNumber={searchParams.get('tab') as TTabNumber}
      onClick={onClick}
    />
  );
};

export default ListPage;
