import React, {useState} from 'react';

export const PeriodSelector = props => {
  const [options] = useState([
    {
      value: '3', label: '3 Month'
    },
    {
      value: '6', label: '6 Month'
    },
    {
      value: '12', label: '12 Month'
    }
  ]);

  return (
    <div className="calendars-select">
      <div className="month-select">
        <select defaultValue="12"
          className="show-tick" onChange={event => { props.onChange(event.target.value); }} >
          {options.map(({label, value}) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          ))}
        </select>       
      </div>
    </div>
  )
}