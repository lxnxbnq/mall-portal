import React, { ReactElement } from 'react';
import s from './brandDirectSupply.module.less';
import Mock from 'mockjs';
import u39 from '@assets/mainpage/u39.png';
import u89 from '@assets/mainpage/u89.png';

interface SupplyItem {
  id: number;
  title: string;
  label: string;
  price: string | number;
  pic: any;
}
const data = Mock.mock({
  'list|4': [
    {
      'id|+1': 1,
      title: '测试制造商',
      label: '上新',
      price: '9.9',
      pic: u39
    }
  ]
});

const SupplyItems: SupplyItem[] = data.list;

const BrandDirectSupply = (): ReactElement => {
  const renderItem = (data: SupplyItem[]) => {
    return data.map((item: SupplyItem) => (
      <div className={s.supplyItem} key={item.id}>
        <span className={s.supplyTitle}>{item.title}</span>
        <p className={s.supplyPrice}>{item.price}元起</p>
        <div className={s.supplyPicWrap}>
          <div className={s.label}>
            <img src={u89} alt="" />
            <span>{item.label}</span>
          </div>
          <img className={s.supplyPic} src={item.pic} alt="" />
        </div>
      </div>
    ));
  };
  return (
    <div className={s.container}>
      <div className={s.header}>
        <span>品牌制造商直供</span>
        <span>更多推荐&gt;&gt;</span>
      </div>
      <div className={s.supplyContent}>{renderItem(SupplyItems)}</div>
    </div>
  );
};

export default BrandDirectSupply;
