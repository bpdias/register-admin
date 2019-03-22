import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../../hocs/Aux';
import DatasetForm from '../datasetForm';
import Card from '../card';
import Select from '../form/select/Select';
import { orderDatasets } from '../../redux/actions/dataset.actions';
import Spinner from '../spinner';
import './Dataset.scss';

class Dataset extends Component {
  constructor() {
    super();
    this.state = {
      ordered: false,
      filtered: false,
    };
  }

  onChange = (e) => {
    const dataType = e.target.value.toLowerCase();
    const filterType = e.target.id;
    const arr = this.props.datasets;

    if (filterType === 'order') {
      this.sortDataset(arr, dataType);
      this.setState({ ordered: true });
    }

    if (filterType === 'filter') {
      this.props._onOrderDataset(this.filterDataset(arr, dataType));
      this.setState({ filtered: true });
    }
  }

  sortDataset = (arr, type) => {
    return arr.sort((a, b) => {
      if (b.data_type !== type && a.data_type !== type) return 0;
      if (a.data_type !== type) return 1;
      if (b.data_type !== type) return -1;
      return a.dataset - b.dataset;
    });
  }

  filterDataset = (arr, type) => {
    const newArr = [];
    arr.forEach((element) => {
      if (element.data_type === type) newArr.push(element);
    });
    return newArr;
  }

  render() {
    let cards = null;
    let allDatasets = this.props.datasets;
    if (this.props.filteredDatasets.length > 0) allDatasets = this.props.filteredDatasets;
    if (allDatasets && this.props.match.isExact) {
      cards = (
        <Aux>
          {allDatasets.map((dataset) => {
            return (
              <Card
                data={dataset}
                key={dataset.id}
              />
            );
          })}
        </Aux>
      );
    } else if (this.props.dataset) {
      cards = (
        <Card
          data={this.props.dataset}
          key={this.props.dataset.id}
        />
      );
    } else {
      cards = (
        <Aux>
          <Spinner />
        </Aux>
      );
    }

    return (
      <Aux>
        <section className="dataset">
          <div className="dataset__form-box">
            <h1 className="heading-primary">
              <span className="heading-primary__main">Neoway</span>
              <span className="heading-primary__sub">Save your info to work with us</span>
            </h1>
              <Route path="/" exact component={DatasetForm} />
              <Route path="/record/:id" exact component={DatasetForm} />
          </div>
        </section>
        <section className="filter">
          <div className="filter__box">
            <div className="form__group">
              <Route
                path="/"
                exact
                render={() => (
                  <Select
                    name="Order By"
                    onChange={this.onChange}
                    options={['Cpf', 'Cnpj']}
                    id="order"
                  />
                )
                }
              />

              <Route
                path="/"
                exact
                render={() => (
                  <Select
                    name="Filter By"
                    onChange={this.onChange}
                    options={['Cpf', 'Cnpj']}
                    id="filter"
                  />
                )
                }
              />
            </div>
          </div>
        </section>

        <section className="dataset__card-section">
          <Route path="/" exact render={() => cards} />
          <Route path="/record/:id" exact render={() => cards} />
        </section>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  
  // console.log(state.orderDatasets.datasets);
  return {
    dataset: state.getDataset.dataset,
    filteredDatasets: state.orderDatasets.datasets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onOrderDataset: data => dispatch(orderDatasets(data)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dataset));
