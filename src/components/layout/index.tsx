import React, { ReactNode } from 'react';
import s from './index.module.less';

interface ITEM {
  id: number;
  name: string | React.ReactElement;
}
const data: Array<ITEM> = [{ id: 1, name: '小米首页' }];

const Layout: React.FC = (): React.ReactElement => {
  const Item: Array<ReactNode> = data.map((item: ITEM) => (
    <div key={item.id}>{item.name}</div>
  ));

  return (
    <div className={s.header}>
      <div className={s.tHeader}>{Item}</div>
      <div></div>
    </div>
  );
};

export default Layout;
