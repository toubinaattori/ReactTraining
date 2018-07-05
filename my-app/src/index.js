

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myData from './weather.json';

class DayWeather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      humidity: "2",
      temperature: null,
      expectedRain: null,
      description: null
    }
  }

  render() {
    return(
      <div className="dayWeather"><div className="dayWeather">Humidity {this.props.value}</div>
      </div>
    )
  }
}

class Day extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      day: null,
      temperature: null,
      viewWeather: false
    }
    this.showWeather = this.showWeather.bind(this);
  }

  showWeather(dayWeather){
    this.setState({viewWeather: true});
  }


  render() {
   let day = this.props.value;
   let daysWeather = myData[day];
    return (
      <div>
      <button className="day" onClick={() => {this.showWeather(daysWeather)}}>
      {this.props.value}
      </button>
      {this.state.viewWeather ? <DayWeather value={daysWeather.humidity}/> : ''}
    </div>
    );
  }
}

class DayRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      days: Array(7).fill(null),
    }
  }

  

  renderDay(day){
    return <Day value={day}/>;
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