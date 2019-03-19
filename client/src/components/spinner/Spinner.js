import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="Spinner">
      <div className="Lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
