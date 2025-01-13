const express = require('express');
const cors = require('cors'); 
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const PORT = 3002;

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));

// Routes
app.use('/api/inventory', inventoryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
