

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


class DayWeather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: null
    }
  }

  render() {
    return(
      <div className="dayWeather"><div className="dayWeather">Humidity {this.props.humidity}</div>
      <div className="dayWeather">Temperature {this.props.temperature}</div>
      <div><Image value={this.props.description}/></div>
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({viewWeather: !this.state.viewWeather});
  }


  render() {
   let day = this.props.value;
   let daysWeather = myData[day];
    return (
      <div>
      <button className="day" onClick={() => {this.handleClick()}}>
      {this.props.value}
      </button>
      <div className="DaysWeather">
      {this.state.viewWeather ? <DayWeather humidity={daysWeather.humidity} temperature={daysWeather.temperature} description={daysWeather.description}/> : ''}
      </div>
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