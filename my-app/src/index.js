

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myData from './weather.json';


class Image extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isOn: null
    }
  }
  render(){
  switch(this.props.value){
    case "sunny":
      return <Sunny/>
    case "cloudy":
      return <Cloudy/>
    default:
      return <Rainy/>
  }
}
}

function Sunny(props){
  return (<img src={require('./sunny.jpg')} alt="sunny" width="42" height="42"></img>);
}

function Rainy(props){
  return (<img src={require('./rainy.jpg')} alt="rainy" width="42" height="42"></img>);
}

function Cloudy(props){
  return (<img src={require('./cloudy.jpeg')} alt="cloudy" width="42" height="42"></img>);
}


class Day extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: null
    }
  }

  render() {
    return(
      <div><div>{this.props.day}</div><Image value={this.props.description}/>
      <div className="dayWeather">{this.props.humidity} {this.props.temperature}°C</div>
      </div>
    )
  }
}

class DayWidget extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: null
    }
  }

  render() {
    return(
      <div><div>{this.props.day}</div>
      <div className="dayWeather">Humidity: {this.props.humidity}</div>
      <div>Temperature: {this.props.temperature}°C</div>
      <div>Expected rain: {this.props.expectedRain}</div>
      </div>
    )
  }
}

class DayRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      days: Array(7).fill(null),
      visibleDay: "null",
    }
    this.handler = this.handler.bind(this);
    this.renderDay = this.renderDay.bind(this);
  }

  handler(day){
    if(this.state.visibleDay===day){
      this.setState({visibleDay: "null"});
    }
    else{
      this.setState({visibleDay: day});
    }
  }

  renderDay(day){
    let daysWeather = myData[day]; 
    return <div><button className="day" onClick={() => {this.handler(day)}}>
    <Day humidity={daysWeather.humidity} temperature={daysWeather.temperature} description={daysWeather.description} day={day}/>
    </button><div className="DaysWeather">
    {this.state.visibleDay===day ? <DayWidget humidity={daysWeather.humidity} temperature={daysWeather.temperature} description={daysWeather.description} expectedRain={daysWeather.expectedRain} day={day}/> : ''}
    </div></div>;
  }


  render() {
    return (
      <div>
        <div className="day-row">{this.renderDay("Monday")}{this.renderDay("Tuesday")}
        {this.renderDay("Wednesday")}{this.renderDay("Thursday")}{this.renderDay("Friday")}
        {this.renderDay("Saturday")}{this.renderDay("Sunday")}</div>
      </div>);
  }
}




class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <div className="weather-panel">
        <DayRow/>
        </div>
        <div className="day">
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Weather />,
  document.getElementById('root')
);