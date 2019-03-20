import React from 'react';

import '../styles/layout.css';

import Header, { HeaderProps } from './header';
import styles from './layout.module.css';

type CompanyInfo = {
  name: string;
  address1: string;
  address2?: string;
  zipCode: string;
  city: string;
  country?: string;
};
type LayoutProps = HeaderProps & {
  companyInfo: CompanyInfo;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  companyInfo,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>

        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
