import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createActivity, updateActivity } from '../api/activityData';
import { getTags } from '../api/tagData';
import { getDestinations } from '../api/destinationData';

const initialState = {
  name: '',
  destination: '',
  description: '',
  favorite: false,
  tags: '',
  id: '',
};

function ActivityForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();
  const [tags, setTags] = useState();
  const [destinations, setDestinations] = useState();

  useEffect(() => {
    getTags().then(setTags);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  useEffect(() => {
    getDestinations().then(setDestinations);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateActivity(formInput).then(() => router.push(`/activities/${obj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createActivity(payload).then(({ name }) => {
        const putPayload = { firebaseKey: name };
        updateActivity(putPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Activity</h2>

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

      <FloatingLabel controlId="floatingSelect" label="Tags">
        <Form.Select
          aria-label="Tags"
          name="tags"
          onChange={handleChange}
          className="mb-3"
          // value={obj.tags}
          required
        >
          <option value="">Select tags</option>
          {
            tags?.map((tag) => (
              <option
                key={tag.id}
                value={tag.id}
              >
                {tag.label}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Destination">
        <Form.Select
          aria-label="Destination"
          name="destination"
          onChange={handleChange}
          className="mb-3"
          // value={obj.tags}
          required
        >
          <option value="">Destination</option>
          {
            destinations?.map((destination) => (
              <option
                key={destination.id}
                value={destination.id}
              >
                {destination.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

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
            sale: e.target.checked,
          }));
        }}
      />

      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Activity</Button>
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
  }),
};

ActivityForm.defaultProps = {
  obj: initialState,
};

export default ActivityForm;
