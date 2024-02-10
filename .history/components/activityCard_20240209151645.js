import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ActivityCard({ activity }) {
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
  }).isRequired,
};
export default ActivityCard;
