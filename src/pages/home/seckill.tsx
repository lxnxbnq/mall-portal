import React from 'react';
import s from './seckill.module.less';
import u39 from '@assets/mainpage/u39.png';
import Mock from 'mockjs';

interface SeckillItem {
  id: number;
  originalPrice: string; // 原价
  title: string;
  subTitle: string;
  seckillPrice: string | number;
  pic: any;
}
const data = Mock.mock({
  'list|4': [
    {
      'id|+1': 1,
      title: '蕾丝边打底裤',
      subTitle: '薄如蝉翼，丝滑',
      seckillPrice: '9.9',
      originalPrice: '299',
      pic: u39
    }
  ]
});

const SeckillItems: SeckillItem[] = data.list;
const Seckill = (): React.ReactElement => {
  const renderItem = (data: SeckillItem[]) => {
    return data.map((item: SeckillItem) => (
      <div className={s.seckillItem} key={item.id}>
        <div className={s.picWrap}>
          <span className={s.originalPrice}>{item.originalPrice}</span>
          <img src={item.pic} alt="" />
        </div>
        <div className={s.titleWrap}>
          <span>秒杀价￥{item.seckillPrice}</span>
          <p>{item.title}</p>
          <p className={s.subTitle}>{item.subTitle}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.leftHeader}>
          <span>秒杀专区</span>
          <span>下一场18:00开始</span>
        </div>
        <div className={s.rightHeader}>
          <span>本场结束时间</span>
          <span>
            <span>00</span>:<span>20</span>:<span>00</span>
          </span>
        </div>
      </div>
      <div className={s.content}>{renderItem(SeckillItems)}</div>
    </div>
  );
};

export default Seckill;
