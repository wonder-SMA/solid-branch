import { FC, PropsWithChildren } from 'react';
import Card from '../card/card';
import { TCardData } from '../../../types/card-data';
import './card-list.scss';

type CardListProps = {
  data?: TCardData[];
  onClick: (id: string | undefined) => void;
}

const CardList: FC<PropsWithChildren<CardListProps>> = ({ data, onClick }) => {

  return (
    <div className="card-list">
      {data?.map((item, index) => (
        <Card
          key={item?.id && index}
          data={item}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default CardList;
