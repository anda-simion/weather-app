import { fetchForecastPending, fetchForecastSuccess, fetchForecastError } from './actions';

const fetchForecast = (city) => {
    return (dispatch) => {
        dispatch(fetchForecastPending());
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=d5703e918780bc6b6597daaabda25b65`)
        .then(response => {
            if (!response.ok) {
                throw Error(`${response.status} ${response.statusText}`)
            } 
            return response.json();
        })
        .then(forecast => {
            dispatch(fetchForecastSuccess(forecast))
        })
        .catch(error => {
            dispatch(fetchForecastError(error.message))
        })
    }
};

export default fetchForecast;

