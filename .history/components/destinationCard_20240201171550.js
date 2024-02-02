import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function destinationCard({ location }) {
  return (
    <Card>
      {location && <Card.Img variant="top" src={location.image} alt={location.name} />}
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <p className="card-text bold">Description: {activities && activities.description}</p>
      </Card.Body>
    </Card>
  );
}

destinationCard.propTypes = {
  activities: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default destinationCard;
