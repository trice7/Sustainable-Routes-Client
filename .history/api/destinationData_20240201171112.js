import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(resolve)
    console
    .catch(reject);
});
export default getDestination;
