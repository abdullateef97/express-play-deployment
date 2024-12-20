const axios = require('axios');
module.exports.getStatus = async (res) => {
  const response = await axios.get('http://universities.hipolabs.com/search?country=Germany');
  return res.json(response.data);
};
