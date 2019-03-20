import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.scss';

class Card extends Component {
  handleClick = () => {

  }

  render() {
    const { ...dataset } = this.props.cardInfo;
    return (
      <div className="row">
        <Link
          to={`/record/${dataset.id} `}
        >
          <div className="card">
            <div className="card__text">
              <h3 className="card__info-name">{dataset.name}</h3>
              <p className="card__info-dataset">{dataset.dataset}</p>
            </div>
            <figcaption className="card__caption">Click To Edit</figcaption>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataset: state.dataset,
  };
};

export default connect(mapStateToProps, null)(Card);
