import { getSingleActivity } from './activityData';
import { getSingleTag } from './tagData';

const viewActivityDetails = (activityFirebaseKey) => new Promise((resolve, reject) => {
  getSingleActivity(activityFirebaseKey)
    .then((activityObject) => {
      getSingleTag(activityObject.tag_id)
        .then((authorObject) => {
          resolve({ authorObject, ...activityObject });
        });
    }).catch((error) => reject(error));
});

export default viewActivityDetails;
