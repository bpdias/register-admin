import React from 'react';
import './Radio.scss';

const Radio = ({
    id,
    inputClass,
    checked,
    name,
    value,
    onChange,
}) => {

  return (
    <div className="form__radio-group">
        <input
            type="radio"
            className={'form__radio-input'}
            id={id}
            checked={checked}
            name={name}
            value={value}
            onChange={onChange}
        />
        <label htmlFor={id} className="form__radio-label">
            <span className="form__radio-button" />
                {value}
        </label>
    </div>  
  );
};

export default Radio;
