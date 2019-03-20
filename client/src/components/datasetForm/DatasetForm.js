import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../commom/TextFieldGroup';
import {
  addDataset,
} from '../../redux/actions/dataset.actions';
import './DatasetForm.scss';


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
      <section className="dataset-form">
        <form onSubmit={this.onSubmit} className="form">
          <div className="form__group">
            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="cpf"
                name="datasetType"
              />
              <label htmlFor="cpf" className="form__radio-label">
                <span className="form__radio-button" />
                CPF
              </label>
            </div>
            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="cnpj"
                name="datasetType"
              />
              <label htmlFor="cnpj" className="form__radio-label">
                <span className="form__radio-button" />
                CNPJ
              </label>
            </div>
          </div>
          
          <div className="form__group">
            <TextFieldGroup
              placeholder="Who Are You?"
              inputClass="form__input"
              id="1"
              type="text"
              name="name"
              onChange={this.onChange}
            />
            <label htmlFor="name" className="form__label">Who Are You?</label>
          </div>

          <div className="form__group">
            <TextFieldGroup
              placeholder="Insert Your CPF"
              inputClass="form__input"
              id="2"
              type="text"
              name="cpf"
              onChange={this.onChange}
            />
            <label htmlFor="cpf" className="form__label">Insert Your CPF</label>
          </div>
        </form>
        <a href="#" className="btn btn--white btn--animated">Submit your Info</a>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onAddDataset: data => dispatch(addDataset(data)),
  };
};

export default connect(null, mapDispatchToProps)(DatasetForm);
