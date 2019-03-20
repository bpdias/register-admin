/* eslint-disable react/no-typos */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import Aux from '../../hocs/Aux';

const TextFieldGroup = ({
  id,
  name,
  placeholder,
  value,
  type,
  onChange,
  disable,
  inputClass,
}) => {
  return (
    <Aux>
      <input
        id={id}
        type={type}
        className={inputClass}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disable}
      />
    </Aux>
  );
};

TextFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  info: propTypes.string,
  error: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func,
  disabled: propTypes.string,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
