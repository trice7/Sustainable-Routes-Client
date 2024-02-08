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
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <Link href={`/activities/${activity.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW DESTINATION INFORMATION</Button>
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
  }).isRequired,
};
export default ActivityCard;
