import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  inputOnChange(evt) {
    this.setState({term: evt.target.value});
  }
  onFormSubmit(evt) {
    evt.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input value={this.state.term} onChange={this.inputOnChange.bind(this)} className="form-control" placeholder="Get 5 Day Forecast in your Favorite City"/>
        <span className="input-group-btn">
          <button type="sumit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
