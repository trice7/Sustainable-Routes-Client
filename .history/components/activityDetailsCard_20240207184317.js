import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { favoriteActivity, deleteActivity } from '../api/activityData';

function ActivityDetailsCard({ activity, setChange, onUpdate }) {
  const router = useRouter();

  const deleteThisActivity = () => {
    const shortDescription = activity.description.split(' ').slice(0, 4).join(' ');
    if (window.confirm(`Delete ${shortDescription}?`)) {
      deleteActivity(activity.id).then(() => {
        onUpdate();
        router.push(' / ');
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
    console.warn(payload);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{activity && activity.name}</Card.Title>
        <Link href={`/activities/edit/${activity.id}`} passHref>
          <Button variant="primary" className="m-2">✏️</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisActivity} className="m-2">🗑️</Button>
        <Button className="m-2" onClick={handleFavorite}>⭐</Button>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <p className="card-text bold">
          Tags:
          {activity && activity.tags && activity.tags.map((tagObj) => (
            <React.Fragment key={tagObj.id}>
              <span>{tagObj.tag.label}</span>{' '}
            </React.Fragment>
          ))}
        </p>
      </Card.Body>
    </Card>
  );
}

ActivityDetailsCard.propTypes = {
  activity: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        tag: PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ).isRequired,
    user: PropTypes.shape({
      uid: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
  setChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ActivityDetailsCard;
