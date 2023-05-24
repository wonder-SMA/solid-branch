import { FC, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { getTabNumber } from '../helpers/get-tab-number';
import { tabTypeMap } from '../helpers/tab-type-map';
import CardList from '../components/elements/card-list/card-list';
import Card from '../components/elements/card/card';
import { data } from '../data';
import { TTransaction } from '../types/data';

const SummaryPage: FC = () => {
  const [isVisibleCardList, setIsVisibleCardList] = useState(false);
  const navigate = useNavigate();

  const headingCardData = useMemo(() => ({
    heading: 'Welcome',
    content: 'With supporting text below as a natural lead-in to additional content.',
    buttonTitle: 'See transactions',
  }), []);

  const cardsData = useMemo(() => {
    const typeAmount = new Map<TTransaction['type'], number>([]);

    data?.data.forEach(item => {
      const amount = typeAmount.get(item.type) || 0;
      typeAmount.set(item.type, amount + 1);
    });

    return Array.from(typeAmount.keys()).map(key => ({
      id: key,
      heading: `${typeAmount.get(key)}`,
      content: tabTypeMap.get(key),
      buttonTitle: 'See all',
    }));
  }, [data]);

  const onClickOnHeadingCard = useCallback(() => {
    setIsVisibleCardList(prevState => !prevState);
  }, [isVisibleCardList]);

  const onClickOnCard = useCallback((id: string | undefined) => {
    if (id) {
      navigate(`/navigator?tab=${getTabNumber(id as TTransaction['type'])}`);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Card
        isHeading
        data={headingCardData}
        footer={`You have ${data?.total} transactions`}
        onClick={onClickOnHeadingCard}
      />
      {isVisibleCardList && <CardList data={cardsData} onClick={onClickOnCard} />}
    </div>
  );
};

export default SummaryPage;
