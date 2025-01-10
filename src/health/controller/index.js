const axios = require('axios');

module.exports.getStatus = async (res) => {
  const response = await axios.get(
    'http://universities.hipolabs.com/search?country=Germany'
  );
  return res.json(response.data);
};

module.exports.postData = async (req, res) => {
  const size = parseInt(req.params.size || 5, 10);
  const obj = {
    country: 'Canada',
    name: 'Lambton College',
    'state-province': 'Ontario',
    alpha_two_code: 'CA',
    web_pages: ['https://www.lambtoncollege.ca'],
  };
  let arr;
  switch (size) {
    case 4:
      arr = Array(1e4).fill(obj);
      break;
    case 6:
      arr = Array(1e6).fill(obj);
      break;
    default:
      arr = Array(1e5).fill(obj);
      break;
  }

  const response = await axios.post('https://httpbin.org/post', arr);
  return res.json(response.data);
};
