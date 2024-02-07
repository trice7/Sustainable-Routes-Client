import { clientCredentials } from '../utils/client';

// GET SINGLE ACTIVITY
const getSingleActivity = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/activities/${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      console.warn(data);
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

// GET ACTIVITY TAGS
const getActivityTag = () => new Promise((resolve, reject) => {
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
export {
  deleteActivity, getActivity, getSingleActivity, getActivityTag,
};
