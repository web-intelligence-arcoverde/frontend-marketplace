import { useEffect, useState } from 'react';

const GetLocationUser = () => {
  const [positionUser, setPositionUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    setPositionUser({ lat: crd.latitude, lng: crd.longitude });
    setLoading(false);
  }

  function errorEvent(err) {
    console.warn(err.code, err.message);
    setLoading(false);
    setError(true);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, errorEvent, options);
  }, []);

  return { positionUser, loading, error };
};

export default GetLocationUser;
