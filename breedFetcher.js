

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const [data] = JSON.parse(body);
    if (data) {
      callback(null, data.description);
    } else {
      callback(Error("Breed not found"), null);
    }
  });
  
};

//fetchBreedDescription(breedName, (error, description) => console.log({error, description}))

module.exports = { fetchBreedDescription };

