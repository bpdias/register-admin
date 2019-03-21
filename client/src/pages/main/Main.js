/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dataset from '../../components/dataset';
import {
    fetchAllDatasets,
} from '../../redux/actions/dataset.actions';
import './mains.scss';

class Main extends Component {
  componentDidMount() {
    this.props._onInitDatasets();
  }

  render() {
    return (
      <div className="main">
        <Dataset datasets={this.props.datasets} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datasets: state.allDatasets.datasets.reverse(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onInitDatasets: () => dispatch(fetchAllDatasets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);