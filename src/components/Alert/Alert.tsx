import React from 'react';
import { Alert, AlertProps } from 'antd';
import s from './Alert.module.less';

const AlertWrapper = function ({ ...props }: AlertProps) {
  return <Alert {...props} className={s.alert} />;
};

export default AlertWrapper;
