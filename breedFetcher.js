const breed = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


const request = require('request');
request(url, (error, response, body) => {

  if (error) {
    console.log(error);
    return error;
  }
  const [data] = JSON.parse(body);
  if (data) {
    console.log(data.description);
  } else {
    console.log("breed not found");
  }
})

