import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destination.json?uid="${uid}"`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn('data', data);
      resolve(data);
    })
    .catch(reject);
});
export default getDestination;
