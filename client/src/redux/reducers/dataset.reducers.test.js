import * as datasetReducer from './dataset.reducers';
import * as actionTypes from '../constants/dataset.constants';
import Dataset from './fixtures/dataset.json';

describe('reducers', () => {
  const defaultDataset = {
    dataset: {},
    isLoading: false,
    error: false,
  };

  describe('datasets', () => {
    it('getDatasets should return the initial state', () => {
      expect(datasetReducer.getDataset(undefined, {})).toEqual({
        dataset: {},
        isLoading: false,
        error: false,
      });
    });
  })


  describe('allDatasets', () => {
    it('allDatasets should return the initial state', () => {
      expect(datasetReducer.allDatasets(undefined, {})).toEqual({
        datasets: [],
      });
    });
  })

  describe('updateDatasets', () => {
    it('updateDatasets should return the initial state', () => {
      expect(datasetReducer.updateDataset(undefined, {})).toEqual({
        dataset: {},
        isLoading: false,
        error: false,
      });
    });
  })

  describe('addDatasets', () => {
    it('addDatasets should return the initial state', () => {
      expect(datasetReducer.addDataset(undefined, {})).toEqual({
        dataset: {},
        isLoading: false,
        error: false,
      });
    });
  })

  describe('deleteDatasets', () => {
    it('deleteDatasets should return the initial state', () => {
      expect(datasetReducer.deleteDataset(undefined, {})).toEqual({
        dataset: {},
        isLoading: false,
        error: false,
      });
    });
  })

  describe('filterDatasets', () => {
    it('filterDatasets should return the initial state', () => {
      expect(datasetReducer.orderDatasets(undefined, {})).toEqual({
        datasets: [],
      });
    });
  })
});
