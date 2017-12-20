import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ForEx from './ForEx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currency: 'EUR',
      date: '2017-12-20',
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
    this.setState({ isFetching: true });
    fetch(`https://api.fixer.io/latest?base=${e.target.value}`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          currency: json.base,
          date: json.date,
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
        <BaseSelector onChange={this.onInputChange} />
        <ForEx {...this.state} />
      </div>
    );
  }
}

export default App;
