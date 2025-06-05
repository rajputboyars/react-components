import React from 'react';

const Heading = ({ boldText, regularText }) => {
  return (
    <h1 className='text-5xl'>
      <span>{regularText}</span>
      <span style={{ fontWeight: 'bold' }}>{boldText}</span>
    </h1>
  );
};

export default Heading;
