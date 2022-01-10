import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'images/logo.svg';
import { Button, Typography } from 'antd';
import cn from 'classnames';
import s from './Sidebar.module.less';
import navbarSchema from './schema/navbarSchema';
import menuSchema from './schema/menuSchema';

const Sidebar = () => {
  const location = useLocation();
  const { Text } = Typography;
  return (
    <aside className={s.sidebar}>
      <nav className={s.navbar}>
        <ul className={s.navbarList}>
          {navbarSchema[0].map((item: any) => (
            <li key={item.alt}>
              <Link to={item.link}>
                <Button
                  type="text"
                  icon={item.icon}
                  className={cn(s.icon, {
                    [s.active]: location.pathname === item.link
                  })}
                />
              </Link>
            </li>
          ))}
          {navbarSchema[1].map((item: any) => (
            <li key={item.alt} className={s.navbarListBottom}>
              <Button
                type="text"
                icon={
                  item.icon ? item.icon : <img src={item.img} alt={item.alt} className={s.avatar} />
                }
                className={cn(s.icon, {
                  [s.active]: location.pathname === item.link
                })}
              />
            </li>
          ))}
        </ul>
      </nav>
      <nav className={s.menu}>
        <img src={logo} alt="revel" width="50%" />
        <ul className={s.menuList}>
          {menuSchema.map((item) => (
            <li key={item.alt}>
              <Link to={item.link}>
                <Button
                  type="text"
                  icon={item.icon}
                  className={cn(s.icon, s.btn, {
                    [s.active]: location.pathname === item.link
                  })}
                >
                  <Text
                    className={cn(s.text, {
                      [s.active]: location.pathname === item.link
                    })}
                  >
                    {item.alt}
                  </Text>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
