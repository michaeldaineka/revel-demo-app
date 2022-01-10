import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Select, Input, Space, Row, Col, Menu, Dropdown } from 'antd';
import emailIcon from 'images/icons/filled/email-fill.svg';
import bellIcon from 'images/icons/filled/bell-fill.svg';
import personIcon from 'images/icons/filled/person-fill.svg';
import { ReactComponent as ArrowDownIcon } from 'images/icons/filled/arrow-down-fill.svg';
import allSchemas from '../../utils/components/header';
import s from './Header.module.less';

const languageMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const Header = () => {
  const { Option } = Select;
  const { Title } = Typography;
  const { Search } = Input;
  const location = useLocation();
  return (
    <header className={s.header}>
      <Row justify="space-between" align="middle">
        <Col>
          {allSchemas.map(
            (item) =>
              location.pathname === item.link && (
                <Title level={4} className={s.title}>
                  {item.alt}
                </Title>
              )
          )}
          <Space size={15}>
            <Select defaultValue="year" className={s.select}>
              <Option value="year">Year</Option>
              <Option value="month">Month</Option>
              <Option value="day">Day</Option>
            </Select>
            <Search placeholder="Search..." className={s.search} />
          </Space>
        </Col>
        <Col>
          <Space size={35}>
            <Space size={30}>
              <img src={emailIcon} alt="email" />

              <img src={bellIcon} alt="bell" />

              <img src={personIcon} alt="person" />
            </Space>
          </Space>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
