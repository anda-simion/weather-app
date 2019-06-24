import React from 'react'

const Forecast = ({forecast}) => {
    return (
        <div>
            
                <div>City: {forecast.name}</div> 
                <div>Temperature: {forecast.main.temp}</div> 
        </div>
    )
}

export default Forecast

