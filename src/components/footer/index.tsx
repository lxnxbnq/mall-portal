import React, { useEffect, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import Classify from '@material-ui/icons/Class';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import PersonIcon from '@material-ui/icons/Person';

import history from '@core/history';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%'
  }
});

interface BottomNavigationItem {
  id: number;
  label: string;
  value: string;
  icon: ReactElement | string;
}

const BottomNavigationConf: BottomNavigationItem[] = [
  {
    id: 1,
    label: '首页',
    value: 'home',
    icon: <HomeIcon />
  },
  {
    id: 2,
    label: '分类',
    value: 'classify',
    icon: <Classify />
  },
  {
    id: 3,
    label: '专题',
    value: 'topic',
    icon: <LocalCafeIcon />
  },
  {
    id: 4,
    label: '我的',
    value: 'mine',
    icon: <PersonIcon />
  }
];

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  useEffect(() => {}, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  const renderItem = (data: BottomNavigationItem[]) => {
    return data.map((item: BottomNavigationItem) => (
      <BottomNavigationAction
        key={item.id}
        label={item.label}
        value={item.value}
        icon={item.icon}
      />
    ));
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      {renderItem(BottomNavigationConf)}
    </BottomNavigation>
  );
}
