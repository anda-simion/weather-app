import * as types from '../actions/actionTypes';

const initialState = {
    pending: false,
    forecast: {},
    error: null
};

const forecastReducer = (state=initialState, action) => {
    switch(action.type) {

        case types.FETCH_FORECAST_PENDING:
            return {
                ...state,
                pending: true,
                forecast: {},
                error: null
            };
        case types.FETCH_FORECAST_SUCCESS:
            return {
                ...state, 
                pending: false,
                forecast: action.forecast,
                error: null
            };
        case types.FETCH_FORECAST_ERROR:
            return {
                ...state,
                pending: false,
                forecast: {},
                error: action.error
            }
        default:
            return state;
    };
};

export default forecastReducer;
