import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ForEx from './ForEx';
import BaseSelector from './BaseSelector.js';
import DateSelector from './DateSelector.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currency: 'EUR',
      date: 'latest',
      rates: {},
      isFetching: false
    };
  }

  // onCall = (e) => {
  //   this.setState({
  //     currency: e.ta
  //   })
  // }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('https://api.fixer.io/latest')
      .then(response => response.json())
      .then(json =>
        this.setState({
          currency: json.base,
          date: json.date,
          rates: json.rates,
          isFetching: false
        })
      );
  }

  onInputChange = e => {
    this.setState({ isFetching: true,
    [e.target.name]:e.target.value});
    fetch(`https://api.fixer.io/${this.state.date}?base=${this.state.currency}`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          currency: json.base,
          rates: json.rates,
          isFetching: false
        })
      );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BaseSelector currency={this.state.currency} rates={this.state.rates} onChange={this.onInputChange} />
        <DateSelector onChange={this.onInputChange} />
        <ForEx {...this.state} />
      </div>
    );
  }
}

export default App;
