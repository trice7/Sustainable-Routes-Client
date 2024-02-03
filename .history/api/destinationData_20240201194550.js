import { clientCredentials } from '../utils/client';

const userToken = localStorage.getItem('userToken');
// GET DESTINATION
const getDestination = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn(data);
      resolve(data);
    })
    .catch(reject);
});
// GET DESTINATION TAGS
const getDestinationTags = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

fetch(`${clientCredentials.databaseURL}/user`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
})
  .then((response) => response.json())
  .then((user) => {
    // Log the user's UID
    console.warn(user.uid);
  })
  .catch((error) => console.error('Error:', error));
export { getDestination, getDestinationTags };
