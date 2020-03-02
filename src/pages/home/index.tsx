import * as React from 'react';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import BrandDirectSupply from './brandDirectSupply';
import Seckill from './seckill';
import s from './index.module.less';

import u39 from '@assets/mainpage/u39.png';
import u60 from '@assets/mainpage/u60.png';
import u65 from '@assets/mainpage/u65.png';
import u69 from '@assets/mainpage/u69.png';
import u73 from '@assets/mainpage/u73.png';
import u76 from '@assets/mainpage/u76.png';

import Mock from 'mockjs';

// import { useSelector } from 'react-redux';

interface SliderItem {
  id: number;
  pic: any;
}
const silderItems: SliderItem[] = Mock.mock({
  'list|4': [
    {
      'id|+1': 1,
      pic: u39
    }
  ]
}).list;

interface ClassifyItem {
  id: number;
  pic: any;
  name: string;
}
const classifyItems: ClassifyItem[] = [
  {
    id: 1,
    pic: u60,
    name: '话题'
  },
  {
    id: 2,
    pic: u65,
    name: '优选'
  },
  {
    id: 3,
    pic: u69,
    name: '特惠'
  },
  {
    id: 4,
    pic: u73,
    name: '签到'
  }
];
// Slider模板
const SliderItemTemplate = (props: SliderItem) => (
  <div className={s.sliderItem}>
    <img src={props.pic} alt="" />
  </div>
);

// 分类模板
const ClassifyItemTemplate = (props: ClassifyItem) => (
  <div className={s.classifyItem}>
    <img src={props.pic} alt="" />
    <span>{props.name}</span>
  </div>
);

const Home: React.FC = (): React.ReactElement => {
  // const { count } = useSelector((state: any) => state.home);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    // autoplay: true
  };

  const renderItem = (data: any[]) => {
    return (Template: any) => {
      return data.map((item: any) => <Template key={item.id} {...item} />);
    };
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Slider className={s.slider} {...settings}>
          {renderItem(silderItems)(SliderItemTemplate)}
        </Slider>
      </div>
      <div className={s.classify}>
        {renderItem(classifyItems)(ClassifyItemTemplate)}
      </div>
      <div className={s.notice}>
        <img src={u76} alt="" />
        <span>智能家电上线！全场9折</span>
        <Button size="small" variant="contained" color="primary">
          详情
        </Button>
      </div>
      <BrandDirectSupply />
      <Seckill />
    </div>
  );
};

export default Home;
