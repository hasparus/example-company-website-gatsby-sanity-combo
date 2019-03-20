import React from 'react';

import styles from './container.module.css';

const Container: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Container;