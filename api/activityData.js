import { clientCredentials } from '../utils/client';

// DELETE ACTIVITY
const deleteActivity = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default deleteActivity;
