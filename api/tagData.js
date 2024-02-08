import { clientCredentials } from '../utils/client';

const getSingleTag = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/tags/${firebaseKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTags = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export { getSingleTag, getTags };
