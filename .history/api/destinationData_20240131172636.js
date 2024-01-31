import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sustainableapi_destination`, {
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
