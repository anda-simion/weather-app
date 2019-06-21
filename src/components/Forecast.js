import React from 'react'

const Forecast = ({forecast}) => {
    return (
        <div>
            {
                forecast.name ? <div>City: {forecast.name}</div> : null
            }

            {
                forecast.main.temp ? <div>Temperature: {forecast.main.temp}</div> : null
            }
            
            
            
        </div>
    )
}

export default Forecast

