/* eslint-disable indent */


import React, {
    Component
} from 'react';

import Dataset from '../../components/dataset';

import {
    connect
} from 'react-redux';

import {
    fetchAllDatasets,
    fetchDataset
} from '../../redux/actions/dataset.actions';


import './mains.scss';

class Main extends Component {
    componentDidMount() {
        this.props._onInitDatasets();
        this.props._onInitDataset();
    }

    render() {
        return (
            <div className='main'>
                <Dataset />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        datasets: state.datasets,
        dataset: state.dataset
    }
}

const mapDispatchToProps = dispatch => {
    return{
        _onInitDatasets: () => dispatch(fetchAllDatasets()),
        _onInitDataset: () => dispatch(fetchDataset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);