import React from 'react';

interface EditProps {
  data?: string;
}

const Edit: React.FC<EditProps> = ({ data }) => {
  return (
    <React.Fragment>
      <h1>Edição</h1>
    </React.Fragment>
  );
};

export default Edit;
