import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from '../constants/dataset.constants';
import * as ajaxHelpers from '../../helpers/javascripts/ajaxHelpers';
import {
  fetchDataset,
  fetchAllDatasets,
} from './dataset.actions';
import Dataset from './fixtures/dataset.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creators', () => {
  describe('fetchShipment', () => {
    it('calls get function from ajaxHelpers and dispatches the right actions on success',
    () => {

      const getMock = jest.spyOn(ajaxHelpers, 'get');
      getMock.mockImplementation(() => {
        return Promise.resolve(Dataset);
      });

      const expectedActions = [
        { type: actionTypes.FECTH_DATASET_IS_LOADING, isLoading: true },
        { type: actionTypes.FECTH_DATASET_SUCCESS, dataset: Dataset },
        { type: actionTypes.FECTH_DATASET_IS_LOADING, isLoading: false },
      ];

      const store = mockStore({
        dataset: null,
        isLoading: false,
        error: false,
      });

      return store.dispatch(fetchDataset(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);

        getMock.mockRestore();
      });
    })
  });

  describe('AllShipments', () => {
    it('calls get function from ajaxHelpers and dispatches the right actions on success',
    () => {
      const getMock = jest.spyOn(ajaxHelpers, 'get');
      getMock.mockImplementation(() => {
        return Promise.resolve(Dataset);
      });

      const expectedActions = [
        { type: actionTypes.FECTH_ALL_DATASETS_IS_LOADING, isLoading: true },
        { type: actionTypes.FECTH_ALL_DATASETS_SUCCESS, datasets: Dataset },
        { type: actionTypes.FECTH_ALL_DATASETS_IS_LOADING, isLoading: false },
      ];

      const store = mockStore({
        datasets: [],
        isLoading: false,
        error: false,
      });

      return store.dispatch(fetchAllDatasets()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);

        getMock.mockRestore();
      });

    })
  })
});
