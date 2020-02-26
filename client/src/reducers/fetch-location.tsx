const fetchLocation = (
  state = {
    location: []
  },
  action: { type: string; payload: any }
) => {
  if (action.type === "FETCH_LOCATION_DATA") {
    state = { ...state, location: action.payload };
  }
  return state;
};

export default fetchLocation;
