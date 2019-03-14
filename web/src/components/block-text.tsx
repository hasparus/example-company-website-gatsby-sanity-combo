import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';

import typography from './typography.module.css';

const serializers = {
  types: {
    block(props: any) {
      // tslint:disable-next-line:no-small-switch
      switch (props.node.style) {
        default:
          return <p className={typography.paragraph}>{props.children}</p>;
      }
    },
  },
};

type BlockTextProps = {
  blocks: any[]; // FIXME graphql-codegen ?
};

const BlockText: React.FC<BlockTextProps> = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
);

export default BlockText;
