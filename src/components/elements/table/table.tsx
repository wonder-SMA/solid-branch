import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { getTabNumber } from '../../../helpers/get-tab-number';
import { tabTypeMap } from '../../../helpers/tab-type-map';
import { TData } from '../../../types/data';
import { TTabNumber } from '../../../types/tab-number';
import './table.scss';

type TableProps = {
  data?: TData['data'];
  tabNumber: TTabNumber;
  onClick: (tabNumber: TTabNumber) => void;
}

const Table: FC<PropsWithChildren<TableProps>> = ({ data, tabNumber, onClick }) => {
  const [selectedTab, setSelectedTab] = useState(tabNumber);
  const tableRef = useRef<HTMLTableElement | null>(null);

  useLayoutEffect(() => {
    if (tableRef.current) {
      const thList = tableRef.current?.querySelectorAll('th') as NodeList;
      const targetTh = (thList[selectedTab] as HTMLTableHeaderCellElement);

      for (let i = 0; i < thList.length; i++) {
        const currentTh = (thList[i] as HTMLTableHeaderCellElement);

        if (currentTh.dataset.value === targetTh.dataset.value) {
          currentTh.classList.add('selected');
        } else {
          currentTh.classList.remove('selected');
        }
      }
    }
  }, [selectedTab]);

  const clickHandler: MouseEventHandler<HTMLTableRowElement> = useCallback((event) => {
    const value = (event.target as HTMLTableElement).dataset.value as TTabNumber;
    setSelectedTab(value);
    onClick(value);
  }, [onClick]);

  return (
    <div className="table" ref={tableRef}>
      <table>
        <thead>
        <tr onClick={clickHandler}>
          {Array.from(tabTypeMap.keys()).map(type => (
            <th key={type} data-value={getTabNumber(type)}>
              {tabTypeMap.get(type)}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Name</td>
          <td>Amount</td>
        </tr>
        {data?.map((item, index) => (
          item.type === Array.from(tabTypeMap.keys())[tabNumber] &&
          <tr key={index}>
            <td>{item.name.first} {item.name.last}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
