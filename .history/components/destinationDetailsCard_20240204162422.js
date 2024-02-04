import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

function DestinationDetailsCard({ activity }) {
  return (
    <Card>
      {activity.location && activity.location.map((location) => (
        <CardGroup key={location.id} className="d-flex align-items-center activity-cards">
          <Card.Body>
            <Card.Title>{location.name}</Card.Title>
            <Card.Text>{location.description}</Card.Text>
            <Button variant="primary" className="view-btn">View</Button>
          </Card.Body>
        </CardGroup>
      ))}
      <div className="d-flex justify-content-center align-items-center">
        <Button className="add-activity">Add Activity</Button>
      </div>
    </Card>
  );
}

DestinationDetailsCard.propTypes = {
  activity: PropTypes.shape({
    location: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
      }),
    ).isRequired,
    id: PropTypes.number,
    favorite: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
};

export default DestinationDetailsCard;
