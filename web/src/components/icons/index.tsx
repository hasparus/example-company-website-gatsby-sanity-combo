import React from 'react';

import HamburgerIcon from './hamburger';

type IconProps = {
  symbol: 'hamburger';
};

const Icon: React.FC<IconProps> = props => {
  // tslint:disable-next-line:no-small-switch
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
};

export default Icon;
