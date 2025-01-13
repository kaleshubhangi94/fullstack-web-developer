import React, { useState } from 'react';
import '../styles/dashboard.css';

function FilterDrawer({ onFilterChange }) {
  const [make, setMake] = useState('');
  const [duration, setDuration] = useState('');

  const handleApplyFilters = () => {
    if (make && duration) {
      onFilterChange({ make, duration });
    } else {
      console.error('Filters cannot be empty');
    }
  };
  

  return (
    <div className="filter-drawer">
      <h3>Filters</h3>
      <div>
        <label>Make:</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Enter vehicle make"
        />
      </div>
      <div>
        <label>Duration:</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">All</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="thisYear">This Year</option>
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default FilterDrawer;
