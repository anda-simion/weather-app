import React from 'react';
import Forecast from './Forecast';

const WeatherForecastDisplay = ({error, forecast}) => {
    return (
        <div>
            {
                error ?  
                    <div>
                        <p>{error}</p>
                    </div>    
                    : 
                    null
            }
            {
                forecast && forecast.name ? <Forecast  forecast={forecast}/> : null
            }
        </div>
    )
};


export default WeatherForecastDisplay;

