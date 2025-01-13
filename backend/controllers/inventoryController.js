const { parseCSV } = require('../utils/csvReader');

const checkDateRange = (dateString, duration) => {
  const date = new Date(dateString);
  const currentDate = new Date();

  let rangeDate;

  switch (duration) {
    case "thisMonth":
      rangeDate = new Date(currentDate.setDate(1)); 
      break;
    case "lastMonth":
      rangeDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
      rangeDate.setDate(1);
      break;
    case "thisYear":
      rangeDate = new Date(currentDate.setMonth(0, 1)); 
      break;
    default:
      return true; 
  }

  return date >= rangeDate; 
};

exports.getInventory = async (req, res) => {
  const { make, duration } = req.query;
  try {
    const data = await parseCSV("./data/sample-data-v2.csv");

    const filteredData = data.filter((row) => {
      const isMakeMatch = !make || (row.brand && row.brand.toLowerCase() === make.toLowerCase());
    
      const isDurationMatch = !duration || checkDateRange(row.timestamp, duration); 
    
      return isMakeMatch && isDurationMatch;
    });
    console.log("Filtered data backend==", filteredData);
    res.json(filteredData);
  } catch (error) {
    console.error('Error reading inventory data:', error); 
    res.status(500).json({ error: 'Error reading inventory data' });
  }
};
