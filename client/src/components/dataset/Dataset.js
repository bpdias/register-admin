import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Aux from '../../hocs/Aux';
import DatasetForm from '../datasetForm';
import Card from '../card';
import Spinner from '../spinner';
import './Dataset.scss';

class Dataset extends Component {
  render() {
    let cards = null;
    if (this.props.datasets) {
      cards = (
        <Aux>
          {this.props.datasets.map((dataset) => {
            return (
              <Card
                cardInfo={dataset}
                key={dataset.id}
              />
            );
          })}
        </Aux>
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
          </div>
        </section>
          
        <section className="dataset__card-section">
          {cards}
        </section>
      </Aux>
    );
  }
}

export default Dataset;
