import { combineReducers } from "redux";

// import the reducers to use
import FetchWeather from "./fetch-weather";
import FetchLocation from "./fetch-location";

// combine reducers
console.log(FetchWeather);
const reducers = combineReducers({
  FetchWeatherReducer: FetchWeather,
  FetchLocationReducer: FetchLocation
});

export default reducers;
