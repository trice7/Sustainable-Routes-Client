import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const createActivity = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activities`, {
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
  fetch(`${endpoint}/activities/${payload.firebaseKey}`, {
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

const getSingleActivity = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activities/${firebaseKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getActivities = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activities`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  createActivity,
  updateActivity,
  getSingleActivity,
  getActivities,
  endpoint,
};
