import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../commom/TextFieldGroup';
import {
  addDataset,
  fetchDataset,
  updateDataset,
  deleteDataset,
} from '../../redux/actions/dataset.actions';
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
      isDeleted: false
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    // if(id) this.props._onInitDataset(id);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ id: this.props.dataset.id });
  }

  onChangeRadioButton = (e) => {
    this.setState({data_type: e.target.value});
  }

  onChangeBlacklistButton = (e) => {
    this.setState({blacklist: e.target.checked});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    id ? this.props._onUpdateDataset(this.state) : this.props._onAddDataset(this.state)
  }

  deleteDataset = (e) => {
    e.preventDefault();
    this.props._onDeleteDataset(this.props.match.params.id)
    if(this.props.isDeleted) window.location.href = "/";
  }

  render() {
    return (
      <section className="dataset-form">
        <form className="form">
          <div className="form__group">
            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="cpf"
                // checked={this.props.dataset.data_type === 'cpf'? true : false}
                name="datasetType"
                value="cpf"
                onChange={this.onChangeRadioButton}
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
                value="cnpj"
                onChange={this.onChangeRadioButton}
                // checked={this.props.dataset.data_type === 'cnpj'? true : false}
              />
              <label htmlFor="cnpj" className="form__radio-label">
                <span className="form__radio-button" />
                CNPJ
              </label>
            </div>

            { this.props.match.params.id ? 
                <div className="form__radio-group">
                <input
                    type="checkbox"
                    className="form__radio-input"
                    id="blacklist"
                    name="blacklist"
                    onChange={this.onChangeBlacklistButton}
                    onClick={this.onClickBlacklistButton}
                    checked={this.props.dataset.blacklist}
                    />
                    <label htmlFor="blacklist" className="form__radio-label">
                        <span className="form__radio-button form__radio-input--blacklist" />
                    Backlist
                </label>
            </div> : null            
        }
          </div>
          
          <div className="form__group">
            <TextFieldGroup
              placeholder={this.props.dataset.name ? this.props.dataset.name : "Who Are You?"}
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
              placeholder={this.props.dataset.dataset ? this.props.dataset.dataset : "Insert Your Number"}
              inputClass="form__input"
              id="2"
              type="text"
              name="dataset"
              onChange={this.onChange}
            />
            <label htmlFor="cpf" className="form__label">Insert Your CPF</label>
          </div>
        </form>
        <a href="#" className="btn btn--white btn--animated" onClick={this.onSubmit}>
            { this.props.match.params.id ? "Edit Your Info" : "Submit your Info" }
        </a>

        { this.props.match.params.id ? 
            <a href="#" className="btn btn--alert btn--animated" onClick={this.deleteDataset}>
                Delete
            </a> : null            
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
    _onInitDataset: id => dispatch(fetchDataset(id)),
    _onDeleteDataset: id => dispatch(deleteDataset(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatasetForm);
