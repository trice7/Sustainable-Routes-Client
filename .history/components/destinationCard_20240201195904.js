import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

function DestinationCard({ location }) {
  const nestedLocation = location.location;

  return (
    <Card>
      {nestedLocation && <Card.Img variant="top" src={nestedLocation.image} alt={nestedLocation.name} />}
      <Card.Body>
        <Card.Title>{nestedLocation.name}</Card.Title>
        <p className="card-text bold">Description: {nestedLocation && nestedLocation.description}</p>
      </Card.Body>
      <Link href={`/activities/${nestedLocation.id}`} passHref>
        <Button variant="primary" className="m-2">VIEW</Button>
      </Link>
    </Card>
  );
}

DestinationCard.propTypes = {
  location: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default DestinationCard;
