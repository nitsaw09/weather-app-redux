// this function gets an initial state
const fetchWeatherData = (
  // initial state
  state = {
    weatherData: [] // which is set to an empty array
  },
  // then we have an action
  action: { type: string; payload: any; }
) => {
  // get the action type FETCH_WEATHER_DATA
  if (action.type === "FETCH_WEATHER_DATA") {
    // here we add a payload to an existing state
    console.log(action.payload);
    state = { ...state, weatherData: action.payload };
  }
  // here return the object, the state
  return state;
};

export default fetchWeatherData;