import React from 'react';
import './Select.scss';

const Select = ({
  name,
  onChange,
  options,
}) => {
  return (
    <div className="filter__select-group">
      <select className="filter__select" onChange={onChange}>
        <option>{name}</option>
        {options.map((option, index) => (<option value={index}>{option}</option>))}
      </select>
    </div>

  );
};

export default Select;
