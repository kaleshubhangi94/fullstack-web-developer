import React from 'react';
import '../styles/dashboard.css';

function HistoryTable({ inventory }) {
  return (
    <div className="history-table">
      <h3>Inventory Table</h3>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>MSRP</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length === 0 ? (
            <tr><td colSpan="5">No inventory data available</td></tr>
          ) : (
            inventory.map((item, index) => (
              <tr key={index}>
                {console.log("inventory==",inventory)}
                
                <td>{item.brand}</td> {/* Updated to match the response data */}
                <td>{item.title}</td> {/* Updated to match the response data */}
                <td>{new Date(item.timestamp).getFullYear()}</td> {/* Extract year from timestamp */}
                <td>${item.price.split(" ")[0]}</td> {/* Only show the price value */}
                <td>{new Date(item.timestamp).toLocaleDateString()}</td> {/* Format the date */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
