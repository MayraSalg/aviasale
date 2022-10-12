
import { Radio } from 'antd';
import React from 'react';

const Filter: React.FC = () => (
    <>
        <div className="filter">
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Самый быстрый</Radio.Button>
            <Radio.Button value="b">Самый быстрый</Radio.Button>
            <Radio.Button value="c">Оптимальный</Radio.Button>

        </Radio.Group>
        </div>
    </>
);

export default Filter;