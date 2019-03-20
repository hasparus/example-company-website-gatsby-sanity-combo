import React from 'react';

type GraphQLErrorListProps = {
  errors: Array<{ message: string }>;
};

const GraphQLErrorList: React.FC<GraphQLErrorListProps> = ({ errors }) => (
  <div>
    <h1>GraphQL Error</h1>
    {errors.map(error => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

export default GraphQLErrorList;
