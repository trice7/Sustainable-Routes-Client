import { clientCredentials } from '../utils/client';

// GET SINGLE ACTIVITY
const getSingleActivity = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${uid}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});
// DELETE ACTIVITY
const deleteActivity = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${uid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET ACTIVITY
const getActivity = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const favoriteActivity = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${uid.uid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  deleteActivity, getActivity, getSingleActivity, favoriteActivity,
};
