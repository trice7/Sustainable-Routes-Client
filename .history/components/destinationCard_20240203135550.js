import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function destinationCard({ activity.location }) {
  // console.warn('location.id', location.id);
  console.warn('location', location);
  // console.warn('href', `/details/${location.id}`);
  return (
    <Card>
      {location && <Card.Img variant="top" src={activity.location.image} alt={activity.location.name} />}
      <Card.Body>
        <Card.Title>{location && location.name}</Card.Title>
        <p className="card-text bold">Description: {location && location.description}</p>
        <Link href={`/details/${location.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

destinationCard.propTypes = {
  location: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default destinationCard;