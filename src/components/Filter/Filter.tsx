
import { Radio } from 'antd';
import React from 'react';

const Filter: React.FC = () => (
    <>
        <div className="filter">
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a" className='filter_fastest'>Самый быстрый</Radio.Button>
            <Radio.Button value="b" className='filter_cheapest'>Самый дешевый</Radio.Button>
        </Radio.Group>
        </div>
    </>
);

export default Filter;