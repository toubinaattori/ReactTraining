

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Day extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      day: null,
      temperature: null,
    }
  }
  render() {
    return (
      <button className="day" onClick={() => this.setState({day: this.props.value})}>
      {this.state.day}
    </button>
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

  

  renderDay(i,day){
    return <Day value={day} />;
  }


  render() {

    return (
      <div>
        <div className="day-row">{this.renderDay(0,"Monday")}{this.renderDay(1,"Tuesday")}
        {this.renderDay(2,"Wednesday")}{this.renderDay(3,"Thursday")}{this.renderDay(4,"Friday")}
        {this.renderDay(5,"Saturday")}{this.renderDay(6,"Sunday")}</div>
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