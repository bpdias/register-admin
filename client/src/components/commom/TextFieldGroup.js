/* eslint-disable react/no-typos */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import Aux from '../../hocs/Aux';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disable,
}) => {
  return (
    <Aux>
      <div className="textFieldGroup">
        <input
          type={type}
          className={classnames('some someother', { 'is-invalid': error })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disable}
        />
        {info && <small className="text-muted">{info}</small>}
        {error && <div className="classeErro">{error}</div>}
      </div>
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
