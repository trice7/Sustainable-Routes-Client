import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

function DestinationDetailsCard({ destination }) {
  const activities = destination.activities;
  return (
    <Card>
      {activities && activities.map((activity) => (
        <CardGroup key={activity.id} className="d-flex align-items-center activity-cards">
          <Card.Body>
            <Card.Title>{activity.name}</Card.Title>
            <Card.Text>{activity.description}</Card.Text>
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
    location: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    id: PropTypes.number,
    favorite: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
  destination: PropTypes.shape({
    activities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
  }),
};

export default DestinationDetailsCard;
