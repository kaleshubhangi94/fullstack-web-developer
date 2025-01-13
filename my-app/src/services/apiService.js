import axios from 'axios';

const BASE_URL = 'http://localhost:3002/api/inventory';

export const fetchInventory = async (filters) => {
  try {
    const response = await axios.get(BASE_URL, { params: filters });
    console.log("Response Data: ", response.data);

    // Map through the response data and process each item
    const mappedInventory = response.data.map(item => ({
      title: item.title,
      description: item.description,
      price: item.price,
      brand: item.brand,
      condition: item.condition,
      productType: item.product_type,
      customLabel: item.custom_label_0,
      timestamp: item.timestamp,
    }));

    // Log the mapped inventory for checking
    console.log("Mapped Inventory: ", mappedInventory);

    // Return the mapped data
    return mappedInventory;

  } catch (error) {
    console.error('Error fetching inventory:', error);
    return [];
  }
};
