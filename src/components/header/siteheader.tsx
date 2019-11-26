import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import s from './siteheader.module.less';

const SiteHeader: React.FunctionComponent = (): React.ReactElement => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('mouseover', (e: MouseEvent): void => {
      if ((e.target as HTMLElement).getAttribute('data-header-menu-trigger')) {
        if (!menuVisible) {
          setMenuVisible(true);
        }
      } else {
        if (menuVisible) {
          setMenuVisible(false);
        }
      }
    });
  });
  return (
    <div className={s['site-header']}>
      <div className={s.container}>
        <div className={s['header-logo']}>
          <a className={s.logo}></a>
        </div>
        <div className={s['header-nav']}>
          <ul className={s['nav-list']}>
            <li className={s['nav-item']}>
              <a data-header-menu-trigger className={s['link']}>
                小米手机
              </a>
            </li>
            <li className={s['nav-item']}>
              <a data-header-menu-trigger className={s['link']}>
                Redmi红米
              </a>
            </li>
            <li className={s['nav-item']}>
              <a data-header-menu-trigger className={s['link']}>
                电视
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        data-header-menu-trigger
        className={
          menuVisible
            ? cx(s['header-nav-menu'], s['header-nav-menu-visible'])
            : s['header-nav-menu']
        }
      >
        <div data-header-menu-trigger className={s['container']}></div>
      </div>
    </div>
  );
};

export default SiteHeader;
