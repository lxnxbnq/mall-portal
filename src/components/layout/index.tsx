import React from 'react';
import Header from '@src/components/header/layoutHeader';
import Footer from '@components/footer';
import s from './index.module.less';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={s.layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
