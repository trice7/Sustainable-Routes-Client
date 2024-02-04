import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function DestinationDetailsCard({ activity }) {
  return (
    <Card>
      {activity && <Card.Img variant="top" src={activity.location.image} alt={activity.location.name} />}
      <Card.Body>
        <Card.Title>{activity && activity.location.name}</Card.Title>
        <p className="card-text bold">Description: {activity && activity.location.description}</p>
        <h5 class>Activities</h5>
        <CardGroup>{activity.description}</CardGroup>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary">Add Activities</button>
        </div>
      </Card.Body>
    </Card>
  );
}

DestinationDetailsCard.propTypes = {
  activity: PropTypes.shape({
    location: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    id: PropTypes.number,
    favorite: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
};

export default DestinationDetailsCard;
