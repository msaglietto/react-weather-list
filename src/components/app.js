import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/SearchBar.jsx';
import WeatherList from '../containers/WeatherList.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
