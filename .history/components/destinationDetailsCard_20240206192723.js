import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
// import onUpdate from '../api/destinationData';
// import deleteActivity from '../api/activityData';

function DestinationDetailsCard({ activity }) {
  // const deleteThisActivity = () => {
  //   if (window.confirm(`Delete ${activity.description}?`)) {
  //     deleteActivity(activity.id).then(() => onUpdate());
  //   }
  // };

  return (
    <Card>
      {activity && <Card.Img variant="top" src={activity.image} alt={activity.name} />}
      <Card.Body>
        <Card.Title>{activity && activity.name}</Card.Title>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <h5 className="activities-header">Activities</h5>
        <CardGroup className="d-flex align-items-center activity-cards">
          <CardGroup className="d-flex align-items-center activity-cards">
            {/* activity.description */}
            {/* <Button variant="primary" className="view-btn">View</Button> */}
          </CardGroup>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="add-activity">Add Activity</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

DestinationDetailsCard.propTypes = {
  activity: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    activities: PropTypes.shape({
      favorite: PropTypes.bool,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default DestinationDetailsCard;