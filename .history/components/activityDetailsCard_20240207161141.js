import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { clientCredentials } from '../utils/client';

function ActivityDetailsCard({ activity }) {
  const [isFavorited, setIsFavorited] = useState([]);

  const handelFavoriteChange = () => {
    fetch(`${clientCredentials.databaseURL}/activities`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorite: !favorite})
    })
    .then(response => response.json())
    .then(updateActivity => onFavoriteActivity)
  }

  const handleFavorite = () => {
    setFavorites([...favorites, activity.id]);
  };
  console.warn(typeof activity.tags);
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
        <p className="card-text bold">Tags: {activity && activity.tags}</p>
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
    tags: PropTypes.string,
  }).isRequired,
};

export default ActivityDetailsCard;
