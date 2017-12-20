import React from 'react';

const DateSelector = ({onChange}) => {
  return(
    <input name='date' type='date' onChange={onChange} />
  )
}

export default DateSelector;
