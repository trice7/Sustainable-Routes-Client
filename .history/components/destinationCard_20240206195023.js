import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Lottie from 'react-lottie';
import animationData from './icons8-edit.json';

function destinationCard({ location }) {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Card>
      {location && <Card.Img variant="top" src={location.image} alt={location.name} />}
      <Card.Body>
        <Card.Title>{location && location.name}</Card.Title>
        <p className="card-text bold">Description: {location && location.description}</p>
        <Link href={`/details/${location.id}`} passHref>
          <Button variant="primary" className="m-2">
            <Lottie options={defaultOptions} height={40} width={40} />
          </Button>
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
