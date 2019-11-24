import React from 'react';
import s from './index.module.less';

import Header from '@components/header';

const Layout: React.FC = ({ children }: any): React.ReactElement => {
  return (
    <div className={s.layout}>
      <Header/>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
