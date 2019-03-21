/* eslint-disable indent */
import * as Endpoints from '../../config/Endpoints';
import {
    get,
    post,
    del,
} from '../../helpers/javascripts/ajaxHelpers';

import {
    FECTH_ALL_DATASETS_SUCCESS,
    FECTH_ALL_DATASETS_IS_LOADING,
    FECTH_ALL_DATASETS_ERROR,
    FECTH_DATASET_SUCCESS,
    FECTH_DATASET_IS_LOADING,
    FECTH_DATASET_ERROR,
    ADD_DATASET_SUCCESS,
    ADD_DATASET_ERROR,
    UPDATE_DATASET_SUCCESS,
    UPDATE_DATASET_ERROR,
    DELETE_DATASET_SUCCESS,
    DELETE_DATASET_ERROR,
} from '../constants/dataset.constants';

const deleteDatasetSuccess = dataset => ({
    type: DELETE_DATASET_SUCCESS,
    dataset,
});

const addDatasetSuccess = dataset => ({
    type: ADD_DATASET_SUCCESS,
    dataset,
});

export const addDatasetError = err => ({
    type: ADD_DATASET_ERROR,
    payload: err.response,
});

const updateDatasetSuccess = dataset => ({
    type: UPDATE_DATASET_SUCCESS,
    dataset,
});

const updateDatasetError = err => ({
    type: UPDATE_DATASET_ERROR,
    payload: err.response.data,
});

const fetchAllDatasetsSuccess = datasets => ({
    type: FECTH_ALL_DATASETS_SUCCESS,
    datasets,
});

const fetchIsLoadingAllDatasets = isLoading => ({
    type: FECTH_ALL_DATASETS_IS_LOADING,
    isLoading,
});

const fetchAllDatasetsError = () => ({
    type: FECTH_ALL_DATASETS_ERROR,
});


const fetchDatasetSuccess = dataset => ({
    type: FECTH_DATASET_SUCCESS,
    dataset,
});

const fetchDatasetIsLoading = isLoading => ({
    type: FECTH_DATASET_IS_LOADING,
    isLoading,
});

const fetchDatasetError = () => ({
    type: FECTH_DATASET_ERROR,
});

const deleteDatasetError = () => ({
    type: DELETE_DATASET_ERROR,
});


export const fetchAllDatasets = () => ((dispatch) => {
    dispatch(fetchIsLoadingAllDatasets(true));

    return get(Endpoints.DATASETS)
        .then((response) => {
            dispatch(fetchAllDatasetsSuccess(response));
            dispatch(fetchIsLoadingAllDatasets(false));
        })
        .catch(() => {
            dispatch(fetchAllDatasetsError());
            dispatch(fetchIsLoadingAllDatasets(false));
        });
});

export const fetchDataset = id => ((dispatch) => {
    dispatch(fetchDatasetIsLoading(true));

    return get(`${Endpoints.DATASET + id}`)
        .then((response) => {
            dispatch(fetchDatasetSuccess(response));
            dispatch(fetchDatasetIsLoading(false));
        })
        .catch(() => {
            dispatch(fetchDatasetError());
            dispatch(fetchDatasetIsLoading(false));
        });
});

export const addDataset = data => ((dispatch) => {
    post(Endpoints.ADD_DATASET, data).then((response) => {
        dispatch(addDatasetSuccess(response));
        dispatch(fetchAllDatasets());
        dispatch(fetchDataset(response.id));
    })
    .catch((err) => {
        dispatch(addDatasetError(err));
    });
});

export const updateDataset = data => ((dispatch) => {
    post(Endpoints.UPDATE_DATASET, data).then((response) => {
        dispatch(updateDatasetSuccess(response));
        dispatch(fetchDataset(response.id));
    })
    .catch((err) => {
        dispatch(updateDatasetError(err));
    });
});

export const deleteDataset = id => ((dispatch) => {
    return del(`${Endpoints.DELETE_DATASET + id}`)
        .then((response) => {
            dispatch(deleteDatasetSuccess(response));
        })
        .catch((err) => {
            dispatch(deleteDatasetError(err));
        });
});
