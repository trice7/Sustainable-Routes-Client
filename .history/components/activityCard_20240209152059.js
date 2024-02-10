import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { deleteActivity, favoriteActivity } from '../api/activityData';

function ActivityCard({ activity, set onUpdate }) {
  const router = useRouter();

  const deleteThisActivity = () => {
    const shortDescription = activity.description.split(' ').slice(0, 4).join(' ');
    if (window.confirm(`Delete ${shortDescription}?`)) {
      deleteActivity(activity.id).then(() => {
        onUpdate();
        router.back();
      });
    }
  };

  const handleFavorite = () => {
    const payload = {};
    payload.id = activity.id;
    payload.uid = activity.user.uid;
    payload.description = activity.description;
    payload.favorite = !activity.favorite;
    payload.location = activity.location.id;
    favoriteActivity(payload).then(() => {
      setChange((prevState) => !prevState);
    });
  };
  return (
    <Card>
      <Card.Body>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <p className="card-text bold">
          Tags: {activity && activity.tags && activity.tags.map((tagObj) => tagObj.tag.label).join(', ')}
        </p>
        <Link href={`/activities/edit/${activity.id}`} passHref>
          <Button variant="primary" className="m-2">✏️</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisActivity} className="m-2">🗑️</Button>
        <Button className="m-2" onClick={handleFavorite}>⭐</Button>
        <Link href={`/activities/${activity.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW ACTIVITY INFO</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    location: PropTypes.shape({
      id: PropTypes.number,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        tag: PropTypes.shape({
          label: PropTypes.string,
        }),
      }),
    ),
    favorite: PropTypes.bool,
    user: PropTypes.shape({
      uid: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default ActivityCard;
