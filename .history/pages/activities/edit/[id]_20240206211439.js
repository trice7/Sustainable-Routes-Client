import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleActivity } from '../../../api/activityData';
import ActivityForm from '../../../components/ActivityForm';

export default function EditActivity() {
  const [editActivity, setEditActivity] = useState({});
  const router = useRouter();

  const { id } = router.query;

  // TODO: make a call to the API to get the activity data
  useEffect(() => {
    getSingleActivity(id).then((data) => {
      setEditActivity(data);
    });
  }, [id]);

  // TODO: pass object to activity form
  return (<ActivityForm obj={editActivity} />);
}
