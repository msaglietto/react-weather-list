import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart.jsx';
import GoogleMap from '../components/GoogleMap.jsx';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pres = cityData.list.map(weather => weather.main.pressure);
    const hums = cityData.list.map(weather => weather.main.humidity);
    const {lon , lat} = cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="red" units="K" /></td>
        <td><Chart data={pres} color="green" units="hPa" /></td>
        <td><Chart data={hums} color="blue" units="%" /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperatur (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
