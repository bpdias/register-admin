import React from 'react';
import './Input.scss';

const Input = ({
  id,
  name,
  placeholder,
  value,
  type,
  onChange,
  disable,
  inputClass,
  maxlength,
  isvalid,
  label
}) => {
  let invalidLabel = ''

  if(isvalid === 'true'){
    inputClass.push('form__input--invalid');
    invalidLabel = 'form__input--invalid-label'
  }else{
    invalidLabel = 'form__input--valid-label'
  }

  return (
    <div className="form__group">
        <input
            id={id}
            type={type}
            className={inputClass.join(' ')}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disable}
            maxLength={maxlength}
            />
        <label htmlFor="cpf" className={`form__label ${invalidLabel}`}>
            {label}
        </label>
    </div>  
  );
};

export default Input;
