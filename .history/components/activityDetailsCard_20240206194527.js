import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
// import { Button } from 'bootstrap';

function ActivityDetailsCard({ activity }) {
  console.warn(activity);
  return (
    <Card>
      <Card.Body>
        <button
        <Card.Title>{activity && activity.name}</Card.Title>
        <p className="card-text bold">Description: {activity && activity.description}</p>
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
  }).isRequired,
};
export default ActivityDetailsCard;
