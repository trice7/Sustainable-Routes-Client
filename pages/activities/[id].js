/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import viewActivityDetails from '../../api/mergeData';

export default function ViewBook() {
  const [activityDetails, setActivityDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { id } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewActivityDetails(id).then(setActivityDetails);
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {activityDetails.name}
          {activityDetails.activityObject?.favorite ? ' 🤍' : ''}
        </h5>
        Activity Destination: <p>{activityDetails.destination}</p>
        <p>{activityDetails.description || ''}</p>
        <hr />
        <p>
          {activityDetails.tags}
        </p>
      </div>
    </div>
  );
}
