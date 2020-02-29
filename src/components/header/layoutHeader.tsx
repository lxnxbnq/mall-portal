import React, { ReactNode } from 'react';
import s from './layoutHeader.module.less';
import u13 from '@assets/header/u13.png';
import u14 from '@assets/header/u14.png';
import u15 from '@assets/header/u15.png';

interface HeaderProps {
  leftContent?: ReactNode;
  title?: string | ReactNode;
  rightContent?: ReactNode;
}

const LeftContent = () => {
  return <img src={u13} alt="" />;
};

const RightContent = () => {
  return (
    <React.Fragment>
      <img src={u14} alt="" />
      <img src={u15} alt="" />
    </React.Fragment>
  );
};

const Header = (props: HeaderProps): React.ReactElement => {
  return (
    <div className={s.header}>
      <div className={s.leftWrap}>{props.leftContent}</div>
      <div className={s.content}>{props.title}</div>
      <div className={s.rightWrap}>{props.rightContent}</div>
    </div>
  );
};
Header.defaultProps = {
  leftContent: <LeftContent />,
  title: 'Mall商城',
  rightContent: <RightContent />
};

export default Header;
