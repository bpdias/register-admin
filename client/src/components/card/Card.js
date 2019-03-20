import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    fetchDataset,
} from '../../redux/actions/dataset.actions';
import './Card.scss';

class Card extends Component {
    componentDidMount = () => {
        this.props._onInitDataset(this.props.match.params.id);
    }

    render() {
    const { ...dataset } = this.props.cardInfo;
    return (
      <div className="row">
        <Link
          to={{
              pathname: `/record/${dataset.id} `,
            }}
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

const mapDispatchToProps = (dispatch) => {
    return {
      _onInitDataset: id => dispatch(fetchDataset(id)),
    };
  };
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));
