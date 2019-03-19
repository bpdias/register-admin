import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../commom/TextFieldGroup';
import {
  addDataset,
} from '../../redux/actions/dataset.actions';


class DatasetForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dataset: '',
      blacklist: false,
      data_type: 'cpf',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props._onAddDataset(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            onChange={this.onChange}
            placeholder="company name"
            name="name"
            type="text"
          />

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

const mapDispatchToProps = (dispatch) => {
  return {
    _onAddDataset: data => dispatch(addDataset(data)),
  };
};

export default connect(null, mapDispatchToProps)(DatasetForm);
