import { Alert, Spin } from 'antd';
import React from 'react';

const Loader : React.FC = () => (
  <Spin tip="Loading..." className="spin">
    <Alert
      message="Please,wait for tickets"
      description="Loading tickets..."
      type="info"
    />
  </Spin>
);

export default Loader;