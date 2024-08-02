import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js';
import { fetchAvailablePlaces } from '../Http.js';

// const places = localStorage.getItem('places');
export default function AvailablePlaces({ onSelectPlace  }) {
  const [isfetchingData, setIsFetchingData] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();


  useEffect(() => {
    async function fetchPlaces() {
      setIsFetchingData(true);

      try {
       const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetchingData(false);
        });

      } catch (error) {
        setError({
          message: error.message || 'Failed to fetch places. Please try again later.'
        });
        setIsFetchingData(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title='An error occured' message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      isLoading={isfetchingData}
      loadingText="fetching place data... "
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
