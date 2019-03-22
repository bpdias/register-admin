import React from 'react';
import './Select.scss';

const Select = ({
  id,
  name,
  onChange,
  options,
}) => {
  return (
    <div className="filter__select-group">
      <select
        id={id}
        className="filter__select"
        onChange={onChange}
      >
        <option>{name}</option>
        {options.map(option => (<option key={option} value={option}>{option}</option>))}
      </select>
    </div>

  );
};

export default Select;
