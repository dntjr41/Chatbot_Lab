// 개인과제 - 날씨 API 사용
// API Keys - 52c7a2cc94ece46a15dfef43358f6166

import React, {Component} from 'react';
import axios from 'axios';
import '../css/Weather.css';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {temp:0, desc:'', icon:'', loading:true}
    }

    componentDidMount() {
        const cityName = 'Seoul';
        const apiKey = '52c7a2cc94ece46a15dfef43358f6166';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    
        axios.get(url)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;
                this.setState({
                    temp: Math.round(data.main.temp - 273.15),
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        if (this.state.loading) {
            return <p>Loading</p>;
        } else {
            return (
                <div className="todayWeather">
                    <img src={imgSrc}/>
                    <p>Seoul</p>
                    <p>{this.state.temp}C</p>
                    <p>{this.state.desc}</p>
                </div>
            );
        }
    }
}

export default Weather;