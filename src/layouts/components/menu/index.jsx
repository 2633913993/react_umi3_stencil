import { history } from 'umi';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import React, { useState } from 'react';
import routers from '../../../routers/index';
import './index.less';

const { Header, Content, Sider } = Layout;
const items1 = routers.map((item, key) => ({
  key: item.name,
  label: `${item.name}`,
  path: item.path,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      // children: new Array(4).fill(null).map((_, j) => {
      //   const subKey = index * 4 + j + 1
      //   return {
      //     key: subKey,
      //     label: `option${subKey}`,
      //   }
      // }),
    };
  },
);

const Menus = (props) => {
  const [isHome, steIsHome] = useState(true);

  const personalItem = [
    {
      key: '1',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          退出
        </a>
      ),
    },
  ];

  const [menuLeft, steMenuLeft] = useState(items2);

  const switchTopMenu = (item) => {
    if (item.key == '首页') {
      history.push(`/home`);
      steIsHome(true);
      return;
    } else {
      steIsHome(false);
    }
    const newMenu = routers
      .filter((menuItem) => {
        return menuItem.name == item.key;
      })[0]
      ?.children.map((newMenuItem) => {
        return {
          key: newMenuItem.path,
          icon: React.createElement(LaptopOutlined),
          label: newMenuItem.name,
        };
      });
    history.push(`${newMenu[0].key}`);
    steMenuLeft(newMenu);
  };

  const switchLeftMenu = (item) => {
    history.push(`${item.key}`);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src={require('../../../assets/logo/logo.png')} alt="" />
          <span>成都市退役军人智慧服务大厅</span>
        </div>
        <Menu
          className="menuTop"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          items={items1}
          onClick={switchTopMenu}
        />
        <div className="logo">
          {/* <Dropdown menu={{ personalItem }} arrow placement="bottom"> */}
          <Avatar
            size={40}
            src={
              <img
                src={require('../../../assets/logo/logo.png')}
                alt="avatar"
              />
            }
            onClick={() => {
              history.push('/login');
            }}
          />
          {/* </Dropdown> */}
        </div>
      </Header>
      {isHome ? (
        <img src={require('../../../assets/logo/bg-login.jpg')} alt="" />
      ) : (
        <Layout>
          <Sider
            width={200}
            style={{
              background: '#fff',
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={menuLeft}
              onClick={switchLeftMenu}
            />
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: '#fff',
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      )}
    </Layout>
  );
};

export default Menus;
