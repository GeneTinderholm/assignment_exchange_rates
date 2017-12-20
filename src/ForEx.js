import React, { Component } from 'react';

const ForEx = ({ currency, date, rates, isFetching }) => {
  // fetch('https://api.fixer.io/latest')
  //   .then(response => response.json())
  //   .then(json =>
  //     this.setState({ currency: json.base, date: json.date, rates: json.rates })
  //   )
  let ratesArray = [];
  for (let key in rates) {
    ratesArray.push(
      <div>
        <p>
          {key}: {rates[key]}
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>Exchange Rates</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Base Currency:</h2>
          <p>{currency}</p>
          <h2>Date:</h2>
          <p>{date}</p>
          <h2>Rates:</h2>
          <p>{ratesArray}</p>
        </div>
      )}
    </div>
  );
};

export default ForEx;
