import axios from "axios";

export function fetchAPIResponse(city: string) {
  return function(dispatch: (arg0: { type: string; payload: any[] }) => void) {
    // make the axios call for the API
    axios
      .get(
        "weather?city=" + city
      )
      .then(response => {
        let arr1 = [];
        for (var key1 in response.data.location) {
          arr1.push(response.data.location[key1]);
        }
        //--- DISPATCH THE ACTION
        // dispatch the FETCH_LOCATION_DATA action
        dispatch({ type: "FETCH_LOCATION_DATA", payload: arr1 });

        // due the structure of the API response
        let arr2 = [];
        console.log(response.data);
        for (var key2 in response.data.current) {
          arr2.push(response.data.current[key2]);
        }
        // splice (remove) it from the array
        arr2.splice(5, 1);

        // --- DISPATCH THE ACTION
        // dispatch the FETCH_WEATHER_DATA action
        dispatch({ type: "FETCH_WEATHER_DATA", payload: arr2 });
      })
      .catch(err => console.log(err));
  };
}
