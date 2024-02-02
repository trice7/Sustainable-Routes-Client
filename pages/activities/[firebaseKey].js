/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import viewActivityDetails from '../../api/activityData';

export default function ViewBook() {
  const [activityDetails, setActivityDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewActivityDetails(firebaseKey).then(setActivityDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {activityDetails.name}
          {activityDetails.activityObject?.favorite ? ' 🤍' : ''}
        </h5>
        Author Destination: <p>{activityDetails.destination}</p>
        <p>{activityDetails.description || ''}</p>
        <hr />
        <p>
          {activityDetails.tags}
        </p>
      </div>
    </div>
  );
}
