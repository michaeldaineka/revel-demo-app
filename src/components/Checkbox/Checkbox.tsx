import React from 'react';
import { Checkbox as NativeCheckbox } from 'antd';
import cn from 'classnames';
import s from './Checkbox.module.less';

const Checkbox = ({
  children,
  type = 'rounded',
  ...props
}: {
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <NativeCheckbox
      {...props}
      className={cn({
        [s.rounded]: type === 'rounded',
        [s.circle]: type === 'circle'
      })}
    >
      {children}
    </NativeCheckbox>
  );
};

Checkbox.Group = NativeCheckbox.Group;

export default Checkbox;
