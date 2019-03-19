import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTyper from 'prop-types';
import Aux from '../../hocs/Aux';
import Form from '../datasetForm';
import Spinner from '../../components/spinner';

class Dataset extends Component {
  render() {
    return (
      <Aux>
        <p>Bruno</p>
        <Form/>
      </Aux>
    );
  }
}

export default Dataset;
