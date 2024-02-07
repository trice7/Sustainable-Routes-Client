import { clientCredentials } from "../utils/client";

// GET PARK
const getPark = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/destination.json?uid="${uid}"`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(res
    .catch(reject);
});