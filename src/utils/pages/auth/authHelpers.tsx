import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react';

const showPasswordIcon = (visible: boolean) =>
  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;

export default showPasswordIcon;
