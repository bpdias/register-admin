import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../commom/TextFieldGroup';

class DatasetForm extends Component {
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            onChange={this.onChange}
            placeholder="cpf"
            name="dataset"
            type="text"
          />

          <TextFieldGroup
            placeholder="cpf"
            name="dataset"
            type="submit"
            value="submit"
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default DatasetForm;
