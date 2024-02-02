import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
export default getDestination;
