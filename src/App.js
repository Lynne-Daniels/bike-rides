import React, { Component } from 'react';
import logo from './bike.svg';
import './App.css';
import Segment from './Segment.js';
import KEYS from './config.js';

let key = KEYS.STRAVA_KEY;
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      stravaTotals: '',
      segmentData: []
    };
  }

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athletes/999806/stats?access_token=' + KEYS.STRAVA_KEY)
      .then((res) => res.json())
        .then((result) => {
          console.log('getting data: ', result);
          this.setState({stravaTotals: {
            distanceInMeters: result.ytd_ride_totals.distance,
            elevationGainInMeters: result.ytd_ride_totals.elevation_gain}});
        })
        .catch((error) => {
          //this.setState({stravaTotals: 'Whoops: ' + error})
          console.log('in here doint this thing, ', error);
        })
    fetch('https://www.strava.com/api/v3/segments/639701/all_efforts?access_token=' + KEYS.STRAVA_KEY)
      .then((res) => res.json())
      .then((result) => {
        console.log('getting segment data: ', result);
        this.setState({segmentData: {
          name: result[0].name,
          elapsed_time: result[0].elapsed_time,
          moving_time: result[0].moving_time,
          distance: result[0].distance,
          average_heartrate: result[0].average_heartrate,
          climb_category: result[0].segment.climb_category,
          start_date_local: result[0].start_date_local,
        }})
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bike Geekery</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{Math.floor(this.state.stravaTotals.distanceInMeters * 0.000621371)} miles ridden this year.</p>
        <p>{Math.floor(this.state.stravaTotals.elevationGainInMeters * 3.28084)} feet climbed this year.
        (That's {(this.state.stravaTotals.elevationGainInMeters * 3.28084 / 29029).toFixed(2)} Everests.)</p>

        <Segment segment={this.state.segmentData}/>
        
      </div>

    );
  }
}

export default App;
