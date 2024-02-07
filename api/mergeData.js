import { getSingleActivity } from './activityData';

const viewActivityDetails = (activityId) => new Promise((resolve, reject) => {
  getSingleActivity(activityId)
    .then((resolve))
}).catch((error) => reject(error));

export default viewActivityDetails;
