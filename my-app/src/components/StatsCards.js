import React from 'react';
import '../styles/dashboard.css';

function StatsCards({ inventory }) {
  const totalVehicles = inventory.length;
  const averageMsrp =
    inventory.reduce((sum, item) => sum + parseFloat(item.msrp || 0), 0) /
    (inventory.length || 1);

  return (
    <div className="stats-cards">
      <div className="card">
        <h3>Total Vehicles</h3>
        <p>{totalVehicles}</p>
      </div>
      <div className="card">
        <h3>Average MSRP</h3>
        <p>${averageMsrp.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default StatsCards;
