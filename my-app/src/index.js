

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Day extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      day: "Monday",
      temperature: "27",
    }
  }

    render() {
  
      return (
        <div>
          <div className="day">{this.state.day}</div>
          <div className="temperature">{this.state.temperature}</div>
        </div>
      );
    }
}




class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <div className="weather-panel">
        <Day/>
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