import React from 'react';
import {useState} from 'react';
import { Checkbox , Divider } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import {ticketSlices} from '../../Store/Slices/TicketSlices';
import {useAppDispatch} from '../../Hooks/Hooks';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const defaultCheckedList = [''];

const Checkboxer: React.FC = () => {
  const dispatch = useAppDispatch()
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  console.log(indeterminate)

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    dispatch(ticketSlices.actions.ticketsFilter(list));
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    dispatch(ticketSlices.actions.ticketsFilter(plainOptions));
  };

  return (
    <>
      <Checkbox indeterminate={false} onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <Divider/>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};

export default Checkboxer;