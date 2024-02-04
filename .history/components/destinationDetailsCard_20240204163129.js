import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

function DestinationDetailsCard({ activity }) {
  return (
    <Card>
      {activity && <Card.Img variant="top" src={activity.location.image} alt={activity.location.name} />}
      <Card.Body>
        <Card.Title>{activity && activity.location.name}</Card.Title>
        <p className="card-text bold">Description: {activity && activity.location.description}</p>
        <h5 className="activities-header">Activities</h5>
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
