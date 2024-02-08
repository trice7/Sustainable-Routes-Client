import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createActivity, updateActivity } from '../api/activityData';
import { getDestination } from '../api/destinationData';
import { getTags } from '../api/tagData';

const initialState = {
  name: '',
  location: '',
  description: '',
  favorite: false,
  tags: '',
  uid: '',
};
function ActivityForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();
  const [locations, setLocations] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [, setAvailableTags] = useState([]);

  useEffect(() => {
    getDestination().then(setLocations);
    if (obj.uid) setFormInput(obj);
  }, [obj]);
  useEffect(() => {
    getTags().then(setAvailableTags);
    if (obj.uid) setFormInput(obj);
  }, [obj, user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formInput,
      uid: user.uid,
      location: formInput.location,
      tags: selectedTags,
    };
    if (obj.uid) {
      updateActivity({ ...payload, uid: obj.uid }).then(() => {
        // After successful update, redirect to the activity's page or as needed
        router.push(`/activities/${obj.id}`);
      });
    } else {
      createActivity(payload).then(() => {
        // Handle the response, such as redirecting to a new page or showing a success message
        router.push('/');
      });
    }
  };

  const handleChangeCheck = (e) => {
    const { value } = e.target;
    setSelectedTags((prevSelectedTags) => {
      const newSelectedTags = new Set(prevSelectedTags);
      if (newSelectedTags.has(value)) {
        newSelectedTags.delete(value);
      } else {
        newSelectedTags.add(value);
      }
      const updatedTags = Array.from(newSelectedTags);
      console.log('Updated selectedTags:', updatedTags); // Log the updated state
      return updatedTags;
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.uid ? 'Update' : 'Create'} Activity</h2>
      <FloatingLabel controlId="floatingInput1" label="Activity" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter an activity name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Activity Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Destination">
        <Form.Select
          aria-label="Destination"
          name="location"
          onChange={handleChange}
          className="mb-3"
          required
        >
          <option value="">Destination</option>
          {
            locations?.map((location) => (
              <option
                key={location.id}
                value={location.id}
              >
                {location.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>
      <ToggleButtonGroup type="checkbox" className="mb-2">
        <ToggleButton id="tbg-check-1" value="1" onChange={handleChangeCheck} checked={selectedTags.includes('1')}>
          Eco-Friendly
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value="2" onChange={handleChangeCheck} checked={selectedTags.includes('2')}>
          Sustainable
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value="3" onChange={handleChangeCheck} checked={selectedTags.includes('3')}>
          Renewable Energy
        </ToggleButton>
        <ToggleButton id="tbg-check-4" value="4" onChange={handleChangeCheck} checked={selectedTags.includes('4')}>
          Conservation
        </ToggleButton>
        <ToggleButton id="tbg-check-5" value="5" onChange={handleChangeCheck} checked={selectedTags.includes('5')}>
          Green Living
        </ToggleButton>
      </ToggleButtonGroup>
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="favorite?"
        checked={formInput.favorite}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      />
      <Button type="submit">{obj.uid ? 'Update' : 'Create'} Activity</Button>
    </Form>
  );
}
ActivityForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    destination: PropTypes.string,
    description: PropTypes.string,
    favorite: PropTypes.bool,
    tags: PropTypes.string,
    firebaseKey: PropTypes.string,
    id: PropTypes.string,
    uid: PropTypes.string,
  }),
};
ActivityForm.defaultProps = {
  obj: initialState,
};

export default ActivityForm;
