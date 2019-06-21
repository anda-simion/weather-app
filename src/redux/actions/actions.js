import * as types from './actionTypes';

export const fetchForecastPending = () => ({
  type: types.FETCH_FORECAST_PENDING
});

export const fetchForecastSuccess = (forecast) => ({
  type: types.FETCH_FORECAST_SUCCESS,
  forecast: forecast
});

export const fetchForecastError = (error) => ({
  type: types.FETCH_FORECAST_ERROR,
  error: error
});
 
