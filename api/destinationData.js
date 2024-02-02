import { endpoint } from './activityData';

function getDestination(id) {
  const url = `http://localhost:8000/destination.json?id=${id}`;
  console.warn(`Fetching: ${url}`); // log the URL being fetched
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((destination) => {
      console.warn('Received data:', destination); // log the received data
      return destination;
    })
    .catch((error) => {
      console.error('Error fetching destination:', error);
    });
}

const getDestinations = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/destinations`, {
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

export { getDestination, getDestinations };
