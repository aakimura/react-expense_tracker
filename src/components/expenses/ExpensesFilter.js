import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const selectedYearHandler = (event) => {
    const filteredYear = event.target.value;
    props.onAddFilter(filteredYear);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.addSelectedYear} 
                onChange={selectedYearHandler}>
          <option value='all'>All years</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;