/* eslint-disable indent */
import * as Endpoints from '../../config/Endpoints';
import {
    get,
    post,
} from '../../helpers/javascripts/ajaxHelpers';

import {
    FECTH_ALL_DATASETS_SUCCESS,
    FECTH_ALL_DATASETS_IS_LOADING,
    FECTH_ALL_DATASETS_ERROR,
    FECTH_DATASET_SUCCESS,
    FECTH_DATASET_IS_LOADING,
    FECTH_DATASET_ERROR,
    ADD_DATASET_SUCCESS,
    ADD_DATASET_IS_LOADING,
    ADD_DATASET_ERROR,
} from '../constants/dataset.constants';

const addDatasetSuccess = dataset => ({
    type: ADD_DATASET_SUCCESS,
    dataset,
});

const addDatasetError = err => ({
    type: ADD_DATASET_ERROR,
    payload: err.response.data,
});

const fetchAllDatasetsSuccess = datasets => ({
    type: FECTH_ALL_DATASETS_SUCCESS,
    datasets,
});

const fetchAllDatasetsIsLoading = isLoading => ({
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


export const fetchAllDatasets = () => ((dispatch) => {
    dispatch(fetchAllDatasetsIsLoading(true));

    return get(Endpoints.DATASETS)
        .then((response) => {
            dispatch(fetchAllDatasetsSuccess(response));
            dispatch(fetchAllDatasetsIsLoading(false));
        })
        .catch(() => {
            dispatch(fetchAllDatasetsError());
            dispatch(fetchAllDatasetsIsLoading(false));
        });
});

export const fetchDataset = id => ((dispatch) => {
    dispatch(fetchDatasetIsLoading(true));

    return get(`${Endpoints.DATASET}1552835784144`)
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
    })
    .catch((err) => {
        dispatch(addDatasetError(err));
    });
});
