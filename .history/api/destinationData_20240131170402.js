import { clientCredentials } from '../utils/client';

// GET PARK
const getdestination = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destination.json?uid="${uid}"`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
export default getPark;
