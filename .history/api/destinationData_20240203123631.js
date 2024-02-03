import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn('getSingleDestination', data);
      resolve(data);
    })
    .catch(reject);
});

export { getDestination, getSingleDestination };
