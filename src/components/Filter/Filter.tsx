
import { Radio } from 'antd';
import React from 'react';

import {ticketSlices} from '../../Store/Slices/TicketSlices';
import {useAppDispatch} from '../../Hooks/Hooks';


const Filter = () => {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(ticketSlices.actions.ticketsSortCheapest());
  };
  const onClickFastest = () => {
    dispatch(ticketSlices.actions.ticketsSortFastest());
  };
  const onClickOptimal = () => {
    dispatch(ticketSlices.actions.ticketsSortOptimal());
  };
  return (
    <>
      <div className="filter">
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a" className='filter_fastest' onClick={onClickFastest}>Самый
          быстрый</Radio.Button>
          <Radio.Button value="b" className='filter_cheapest' onClick={onClick}>Самый дешевый</Radio.Button>
          <Radio.Button value="c" className='filter_optimal' onClick={onClickOptimal}> Самый оптимальный</Radio.Button>
        </Radio.Group>
      </div>
    </>
  )


};

export default Filter;