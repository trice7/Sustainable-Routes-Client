import { clientCredentials } from '../utils/client';

// GET DESTINATION
export default function getDestination(id) {
  const url = `http://localhost:8000/destination.json?id=${id}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((destination) => {
      console.log(destination); // log the destination data
      return destination;
    })
    .catch((error) => {
      console.error('Error fetching destination:', error);
    });
}
export default getDestination;