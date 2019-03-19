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


const defaultDataset = {
    datasets: [],
    dataset: {},
    isLoading: false,
    error: false
}

export const addDataset = (state = defaultDataset, action) => {
    switch (action.type) {
        case ADD_DATASET_SUCCESS:
            return {
                ...state,
                dataset: action.dataset,
                error: false,
            };
        default:
            return state;
    }
};


export const datasetIsLoading = (state = true, action) => {
    switch (action.type) {
        case FECTH_DATASET_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const allDatasetsIsLoading = (state = true, action) => {
    switch (action.type) {
        case FECTH_ALL_DATASETS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const allDatasets = (state = defaultDataset, action) => {
    switch (action.type) {
        case FECTH_ALL_DATASETS_SUCCESS:
            return {
                ...state,
                datasets: action.datasets,
                error: false,
            };
        case FECTH_ALL_DATASETS_ERROR:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export const getDataset = (state = defaultDataset, action) => {
    switch (action.type) {
        case FECTH_DATASET_SUCCESS:
            return {
                ...state,
                dataset: action.dataset,
                error: false,
            };
        case FECTH_DATASET_ERROR:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};