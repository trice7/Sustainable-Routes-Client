import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ActivityForm from '../../../components/ActivityForm';
import { getSingleActivity } from '../../../api/activityData';

export default function EditAuthor() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the activity data
  useEffect(() => {
    getSingleActivity(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<ActivityForm obj={editItem} />);
}
