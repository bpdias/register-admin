import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../form/input/Input';
import Radio from '../form/radio/Radio';
import Checkbox from '../form/checkbox/Checkbox';
import {
  addDataset,
  updateDataset,
  deleteDataset,
} from '../../redux/actions/dataset.actions';
import {
  formatCnpj,
  formatCpf,
} from '../../helpers/javascripts/masks';
import {
  isCpf,
  isCnpj,
} from '../../helpers/javascripts/validations';

import './DatasetForm.scss';

class DatasetForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      dataset: '',
      blacklist: false,
      data_type: 'cpf',
      isDeleted: false,
      error: {
          invalid: false,
          text: ''
      },
      nameError: {
          invalid: false,
          text: ''
      }
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ id: this.props.dataset.id });
    const dataType = this.props.dataset.data_type;
    this.validateName();
    
    if (dataType === 'cpf' && e.target.name !== 'name') {
      e.target.value = formatCpf(e.target.value);
      
      if (isCpf(e.target.value)) {
        this.setState({ 
            error: {
                invalid: false,
                text: 'Invalid Cpf'
            } 
        });
      }else {
        this.setState({ 
            error: {
                invalid: 'true'
            } 
        });
      }

    } else if (dataType === 'cnpj' && e.target.name !== 'name') {
      e.target.value = formatCnpj(e.target.value);

      if (isCnpj(this.state.dataset)) {
        this.setState({ 
            error: {
                invalid: false,
                text: 'Invalid Cnpj'
            } 
        });
      } else {
        this.setState({ 
            error: {
                invalid: 'true'
            } 
        });
      };
    }
  }

  onChangeRadioButton = (e) => {
    this.setState({ data_type: e.target.value });
  }

  onChangeBlacklistButton = (e) => {
    this.setState({ blacklist: e.target.checked });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const dataType = this.state.data_type;
    this.validateName();
    this.validateDataset();
    
    if (dataType === 'cpf') {
      if (isCpf(this.state.dataset)) {
        id ? this.props._onUpdateDataset(this.state) : this.props._onAddDataset(this.state)
      } 
    } 
    
    if (dataType === 'cnpj') {
      if (isCnpj(this.state.dataset)) {
        id ? this.props._onUpdateDataset(this.state) : this.props._onAddDataset(this.state)
      } 
    }
  }

  validateName = () => {
    if (this.state.name.length <= 2) {
        this.setState({ 
            nameError: {
                invalid: 'true',
                text: 'Your name is weird!',
            } 
        });
    } else {
        this.setState({ 
            nameError: {
                invalid: false,
            } 
        });
    }
  }

  validateDataset() {
    if (this.state.dataset.length <= 2) {
        this.setState({ 
            error: {
                invalid: 'true',
                text: 'Your name is weird!',
            } 
        });
    } else {
        this.setState({ 
            error: {
                invalid: false,
            } 
        });
    }
    
  }

  deleteDataset = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props._onDeleteDataset(id)
    if(this.props.isDeleted) window.location.href = "/";
  }

  render() {
    const name = this.props.dataset.name;
    const dataset = this.props.dataset.dataset;
    const id = this.props.match.params.id;
    const isValid = this.state.error.invalid;
    const isNameValid = this.state.nameError.invalid;

    return (
      <section className="dataset-form">
        <form className="form">
          <div className="form__group">
            <Radio
                type="radio"
                className={['form__radio-input']}
                id="cpf"
                name="datasetType"
                value="cpf"
                checked={ this.state.data_type === 'cpf' ? true : false }
                onChange={this.onChangeRadioButton}
            />
            <Radio
                type="radio"
                className={['form__radio-input']}
                id="cnpj"
                name="datasetType"
                value="cnpj"
                onChange={this.onChangeRadioButton}
            />

            { id ? 
                <Checkbox
                    type="checkbox"
                    className="form__radio-input"
                    id="blacklist"
                    name="blacklist"
                    label="Blacklist"
                    onChange={this.onChangeBlacklistButton}
                    onClick={this.onClickBlacklistButton}
                    /> : null
            }
          </div>
            <Input
              placeholder={ name ? name : "Who Are You?"}
              inputClass={['form__input']}
              id="1"
              type="text"
              name="name"
              isvalid={isNameValid}
              onChange={this.onChange}
              maxlength='30'
              label={isNameValid ? 'Your Name is Weird!' : 'Who Are You?'}
            />
          
            <Input
              placeholder={dataset ? dataset : "Insert Your Number"}
              inputClass={['form__input']}
              id="2"
              type="text"
              name="dataset"
              isvalid={isValid}
              onChange={this.onChange}
              maxlength={this.state.data_type === 'cpf' ? 14 : 18}
              label={isValid ? 'Invalid Number!' : 'Everything seens ok!'}
            />
        </form>
        
        <button 
            className="btn btn--white btn--animated" 
            onClick={this.onSubmit}>
                { id ? "Edit Your Info" : "Submit your Info" }
        </button>

        { id ? 
            <button 
                className="btn btn--alert btn--animated" 
                onClick={this.deleteDataset}>
                    Delete
            </button> : null            
        }
        
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataset: state.getDataset.dataset,
    isDeleted: state.deleteDataset.isDeleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onAddDataset: data => dispatch(addDataset(data)),
    _onUpdateDataset: data => dispatch(updateDataset(data)),
    _onDeleteDataset: id => dispatch(deleteDataset(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatasetForm);
