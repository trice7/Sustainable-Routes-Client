import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { favoriteActivity } from '../api/activityData';

function ActivityDetailsCard({ activity, setChange }) {
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
        <Button className="m-2">🗑️</Button>
        <Button className="m-2" onClick={handleFavorite}>⭐</Button>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <p className="card-text bold">
          Description:
          {activity && activity.tag && activity.tag.map((tag) => <span key={tag.id}>{tag}</span>)}
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
    tags: PropTypes.arrayOf(PropTypes.string),
    user: PropTypes.shape({
      uid: PropTypes.string.isRequired,
    }).isRequired,
    tag: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  setChange: PropTypes.func.isRequired,
};

export default ActivityDetailsCard;
