import React, { useEffect, useState } from 'react';
import ActivityCard from '../components/activityCard';
import { useAuth } from '../utils/context/authContext';
import { getActivity } from '../api/activityData';

export default function FavActivity() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getActivity().then((data) => {
      const favoriteActivities = data.filter((obj) => obj.favorite);
      setFavorites(favoriteActivities);
    });
  }, []);
  const { user } = useAuth();

  return (
    <>
      <div className="content">
        <h1>These are the Favorite Activities of {user.fbUser.displayName}!</h1>
        <div>
          {favorites.map((favorite) => (
            <ActivityCard key={favorite.id} activity={favorite} />
          ))}
        </div>
      </div>
    </>
  );
}
