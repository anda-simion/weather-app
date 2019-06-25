import React from 'react';
import { Card } from 'antd';

const Forecast = ({forecast}) => {
    
    return (
        <div style={{display: "inline-block"}}>
            <Card title={`City: ${forecast.name}`} style={{ width: 300 }}>
                <img src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].main}/>
                <p>{forecast.weather[0].description}</p>
                <p>Temperature: {forecast.main.temp}</p>
                <p>Humidity: {forecast.main.humidity}%</p>
                <p>Pressure: {forecast.main.pressure}hpa</p>
            </Card>
        </div>
    )
}

export default Forecast

