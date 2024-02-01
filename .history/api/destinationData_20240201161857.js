import { clientCredentials } from '../utils/client';

// GET DESTINATION
const getDestination = () => {
  fetch  = `http://localhost:8000/activities/id=${id}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((destination) => {
      console.warn(destination);
      return destination;
    })
    .catch((error) => {
      console.error('Error fetching destination:', error);
    });
}
export default getDestination;
