import React from 'react';
import './Checkbox.scss';

const Checkbox = ({
    id,
    name,
    onChange,
    onClick,
    checked,
    label
}) => {

  return (
    <div className="form__radio-group">
        <input
            type="checkbox"
            className="form__radio-input"
            id={id}
            name={name}
            onChange={onChange}
            onClick={onClick}
            checked={checked}
        />
        <label htmlFor={id} className="form__radio-label">
            <span className="form__radio-button form__radio-input--blacklist" />
                {label}
            </label>
    </div>  
  );
};

export default Checkbox;
