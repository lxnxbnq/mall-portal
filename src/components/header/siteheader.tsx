import React, { useState } from 'react';
import cx from "classnames";
import s from './siteheader.module.less';


const SiteHeader: React.FunctionComponent = (): React.ReactElement => {
    const [menuVisible, setMenuVisible] = useState(false);
    
    const handleNavListMouseOver = (e: any) => {
        if (e.nativeEvent.target.getAttribute('data-menu-trigger')) {
            setMenuVisible(true)
        } else {
            setMenuVisible(false)
        }
    }

    return (
        <div 
            onMouseOver={handleNavListMouseOver}
            className={s['site-header']}
        >
            <div className={s.container}>
                <div className={s['header-logo']}>
                    <a className={s.logo}></a>
                </div>
                <div className={s['header-nav']}>
                    <ul
                        className={s['nav-list']}
                    >
                        <li className={s['nav-item']}>
                            <a className={s['link']} data-menu-trigger>小米手机</a>
                        </li>
                        <li className={s['nav-item']}>
                            <a className={s['link']} data-menu-trigger>Redmi红米</a>
                        </li>
                        <li className={s['nav-item']}>
                            <a className={s['link']} data-menu-trigger>电视</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div data-menu-trigger className={menuVisible ? cx(s['header-nav-menu'], s['header-nav-menu-visible']) : s['header-nav-menu']}>
                <div data-menu-trigger className={s['container']}></div>
            </div>
        </div>
    )
}

export default SiteHeader;