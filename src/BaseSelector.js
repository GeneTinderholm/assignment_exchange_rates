import React from 'react';

const BaseSelector = ({ currency, rates, onChange }) => {

  let optArray = [];
  optArray.push(<option value={currency}>{currency}</option>);
  for(let key in rates){
    optArray.push(<option value={key}>{key}</option>)
  }

  return(<select name='currency' onChange={onChange} value={currency}>
    {optArray}
    </select>
  )
}

export default BaseSelector;
