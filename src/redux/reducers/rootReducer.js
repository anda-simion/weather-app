import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import forecastReducer from './forecastReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  forecast: forecastReducer,
});

export default rootReducer;