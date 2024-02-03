import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function DestinationDetailsCard({ location }) {
  return (
    <Card>
      {location && <Card.Img variant="top" src={location.image} alt={location.name} />}
      <Card.Body>
        <Card.Title>{location && location.name}</Card.Title>
        <p className="card-text bold">Description: {location && location.description}</p>
      </Card.Body>
    </Card>
  );
}

DestinationDetailsCard.propTypes = {
  location: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default DestinationDetailsCard;
