import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/id=${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(resolve)
    consol
    .catch(reject);
});
export default getDestination;
