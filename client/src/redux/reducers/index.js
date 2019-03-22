import {
  combineReducers,
} from 'redux';

import {
  allDatasets,
  allDatasetsIsLoading,
  getDataset,
  datasetIsLoading,
  addDataset,
  deleteDataset,
  orderDatasets,
} from './dataset.reducers';

export default combineReducers({
  allDatasets,
  allDatasetsIsLoading,
  getDataset,
  datasetIsLoading,
  addDataset,
  deleteDataset,
  orderDatasets,
})