import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/id=${id}`);
  method: 'GET',
})
.then((response) => response.json())
.then(resolve)

export default getDestination;
