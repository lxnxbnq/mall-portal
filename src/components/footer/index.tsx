import React from 'react';
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

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="首页" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="分类"
        value="classify"
        icon={<Classify />}
      />
      <BottomNavigationAction
        label="专题"
        value="topic"
        icon={<LocalCafeIcon />}
      />
      <BottomNavigationAction label="我的" value="mine" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
