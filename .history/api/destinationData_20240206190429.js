import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destinations`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

// GET SINGLE DESTINATION
const getSingleDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destinations/${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

export { getDestination, getSingleDestination };
