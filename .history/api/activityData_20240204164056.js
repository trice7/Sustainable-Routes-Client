// DELETE ACTIVITY
const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
