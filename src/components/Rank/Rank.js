import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f2">{`Welcome, ${name}.`}</div>
      <div className="white f3">{`Entries count so far:`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
