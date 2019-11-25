import React, { ReactNode } from 'react';
import s from './index.module.less';
import SiteHeader from './siteheader';

interface ITEM {
  id: number;
  name: string | React.ReactElement;
  path: string;
}
const data: Array<ITEM> = [
  { id: 1, name: '小米商城', path: '/' },
  { id: 2, name: '小米商城', path: '/' },
  { id: 3, name: '小米商城', path: '/' }
];
const userData: Array<ITEM> = [
  { id: 1, name: '登录', path: '/' },
  { id: 2, name: '注册', path: '/' },
  { id: 3, name: '消息通知', path: '/' }
];
const Header = (): React.ReactElement => {
  const Nav: Array<ReactNode> = data.map((item: ITEM) => (
    <a key={item.id}>{item.name}</a>
  ));
  const User: Array<ReactNode> = userData.map((item: ITEM) => (
    <a key={item.id}>{item.name}</a>
  ));
  return (
    <div className={s.header}>
      <div className={s['site-topbar']}>
        <div className={s.container}>
          <div className={s['topbar-nav']}>{Nav}</div>
          <div className={s['topbar-cart']}>
            <a className={s['cart-mini']}>
              <em className={s['iconfont-cart']}></em>
              购物车
              <span>(0)</span>
            </a>
          </div>
          <div className={s['topbar-info']}>{User}</div>
        </div>
      </div>
      <SiteHeader />
    </div>
  );
};

export default Header;
