import { clientCredentials } from '../utils/client';

// GET DESTINATION
function getDestination(id) {
  const url = `http://localhost:8000/destination.json?id=${id}`;
  console.war(`Fetching: ${url}`); // log the URL being fetched
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((destination) => {
      console.log('Received data:', destination); // log the received data
      return destination;
    })
    .catch((error) => {
      console.error('Error fetching destination:', error);
    });
}
export default getDestination;
