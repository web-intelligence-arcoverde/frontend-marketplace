const getPositionUser = async () => {
  await navigator.geolocation.getCurrentPosition(
    (position) => position,
    (err) => console.error(err),
  );
};

export default getPositionUser;
