import { FC, PropsWithChildren, useCallback } from 'react';
import Button from '../button/button';
import { TCardData } from '../../../types/card-data';
import './card.scss';

type CardProps = {
  isHeading?: boolean;
  header?: string;
  data?: TCardData;
  footer?: string;
  onClick: (id: string | undefined) => void;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ header, data, footer, isHeading, onClick }) => {

  const clickHandler = useCallback(() => onClick(data?.id), [data?.id, onClick]);

  return (
    <div className={`card ${isHeading ? 'heading' : ''}`}>
      <div className="card__content">
        {isHeading &&
          <div className="card__header">
            {header}
          </div>}
        <div className="card__body">
          <h2>{data?.heading}</h2>
          <p>{data?.content}</p>
          <Button onClick={clickHandler}>
            {data?.buttonTitle}
          </Button>
        </div>
        {isHeading &&
          <div className="card__footer">
            {footer}
          </div>}
      </div>
    </div>
  );
};

export default Card;
