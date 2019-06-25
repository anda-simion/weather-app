import React, { Component } from 'react';
import WeatherForecastDisplay from './WeatherForecastDisplay';
import { connect } from 'react-redux';
import  fetchForecast from '../redux/actions/fetchForecast';
import { Spin } from 'antd';
import 'antd/dist/antd.css';


export class WeatherForm extends Component {
    constructor() {
        super();
        this.state = {
          city: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchForecast(this.state.city);
        this.setState({city: ""})
    };

    handleChange(e) {
        this.setState({city: e.target.value})
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.city}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="submit"
                        value="Get forecast"
                    />
                </form>
                <div>
                    <br/>
                    <br/>
                    {
                        this.props.pending ? 
                            <Spin  size="large"/>
                            : 
                            <WeatherForecastDisplay 
                                error={this.props.error}
                                forecast={this.props.forecast}
                            />
                    }
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => (
    {
        pending: state.forecast.pending,
        forecast: state.forecast.forecast,
        error: state.forecast.error
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        fetchForecast: (cityName) => dispatch(fetchForecast(cityName))
    }
);
    
export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);
