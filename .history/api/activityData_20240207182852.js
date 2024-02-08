import { clientCredentials } from '../utils/client';

// GET SINGLE ACTIVITY
const getSingleActivity = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

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
  fetch(`${clientCredentials.databaseURL}/activities/${uid.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(uid),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createActivity = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateActivity = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${payload.firebaseKey}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  deleteActivity, getActivity, getSingleActivity, favoriteActivity, createActivity, updateActivity,
};
