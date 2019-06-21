import React from 'react';
import Forecast from './Forecast';
import { isObjEmpty} from '../utils';

const WeatherForecastDisplay = ({error, forecast}) => {
    
    console.log('props from WeatherForecastDisplay', error, forecast);
    return (
        <div>
            {
                error ?  <p>{error}</p> : null
            }
            {
                !isObjEmpty(forecast) ? <Forecast  forecast={forecast}/> : null
            }
        </div>
    )
};


export default WeatherForecastDisplay;

