import React, { useState, useEffect } from 'react';
import StatsCards from './StatsCards';
import FilterDrawer from './FilterDrawer';
import BarChart from './BarChart';
import HistoryTable from './HistoryTable';
import { fetchInventory } from '../services/apiService';
import '../styles/dashboard.css';

function Dashboard() {
  const [inventory, setInventory] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInventory(filters);
      setInventory(data);
    };
    fetchData();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="dashboard">
      <h1>Inventory Dashboard</h1>
      <StatsCards inventory={inventory} />
      <FilterDrawer onFilterChange={handleFilterChange} />
      <BarChart inventory={inventory} />
      <HistoryTable inventory={inventory} />
    </div>
  );
}

export default Dashboard;
