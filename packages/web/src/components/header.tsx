import { Link } from 'gatsby';
import React from 'react';

import { cn } from '../lib/helpers';

import styles from './header.module.css';
import Icon from './icons';

export type HeaderProps = {
  onHideNav: () => void;
  onShowNav: () => void;
  showNav: boolean;
  siteTitle: string;
};

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }: HeaderProps) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </h1>

      <button
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
