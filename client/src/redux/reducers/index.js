import {
    combineReducers
} from 'redux';

import {
    allDatasets,
    allDatasetsIsLoading,
    getDataset,
    datasetIsLoading,
    addDataset
} from './dataset.reducers';

export default combineReducers({
    allDatasets,
    allDatasetsIsLoading,
    getDataset,
    datasetIsLoading,
    addDataset
})