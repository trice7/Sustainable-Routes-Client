import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ActivityCard({ activity }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{activity && description.name}</Card.Title>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        {/* TODO: Add a button to view the activity details */}
        <Link href="/activities/activityDetails" passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
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
  }).isRequired,
};
export default ActivityCard;
