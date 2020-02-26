import React, { Component } from "react";

// import the connect and bindActionsCreators functions
// in order to connect the component to the state in Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import the action
import { fetchAPIResponse } from "../actions/fetch-weather-data";

interface Props {
  FetchAPIResponse: any;
  apiResponse: any;
  apiLocation: any;
}

interface State {
  value: String;
}

class Main extends Component<Props, State> {
  // call the action
  componentWillMount = () => {
    // before mounting
    this.props.FetchAPIResponse("New York");
  };

  // this is the function to search for the city added
  search = () => {
    // in this case I am using state just for this component
    this.props.FetchAPIResponse(this.state.value);
  };

  changeHandler = (e: { target: { value: any } }) => {
    // get the value from the input
    let value = e.target.value;
    // store the value in the state property
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="h1 text-white mb-3">Weather App</div>
        <div className="input-group mb-3 d-flex justify-content-center">
          <select
            className="form-control col-md-4"
            onChange={this.changeHandler.bind(this)}
          >
            <option value="New York">New York</option>
            <option value="New Jersey">New Jersey</option>
            <option value="California">California</option>
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="button"
              onClick={this.search}
            >
              Weather
            </button>
          </div>
        </div>
        <div className="container text-center mt-3">
          <div>
            <div className="col-12">
              <p className="h3 text-white">
                {this.props.apiLocation[0]}, {this.props.apiLocation[1]}
              </p>
              <img
                className="img-thumbnail cloud-img"
                src={this.props.apiResponse[3]}
                alt="cloud-img"
              ></img>
              <p className="mt-2 text-white h5">{this.props.apiResponse[4]}</p>
              <p className="text-white h6">
                {this.props.apiResponse[14] === "yes" ? "Day" : "Night"}{" "}
                {this.props.apiResponse[0]}
              </p>
            </div>
            <div className="row mt-4 d-flex justify-content-center text-white">
              <div className="col-md-2 col-xs-12">
                <div className="h5">Celsius</div>
                <div className="divider"></div>
                <div className="mt-3 mb-4 h4">
                  {this.props.apiResponse[1]} °C
                </div>
              </div>
              <div className="col-md-2 col-xs-12">
                <div className="h5">Fahrenheit</div>
                <div className="divider"></div>
                <div className="mt-3 mb-4 h4">
                  {this.props.apiResponse[11]} °F
                </div>
              </div>
              <div className="col-md-2 col-xs-12">
                <div className="h5">Humidity</div>
                <div className="divider"></div>
                <div className="mt-3 mb-4 h4">
                  {this.props.apiResponse[9]} %
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: {
  FetchWeatherReducer: { weatherData: any };
  FetchLocationReducer: { location: any };
}) {
  // allows us to get the data from the store
  // using props
  // state.ReducerName.reducerProperty
  return {
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation: state.FetchLocationReducer.location
  };
}

// remember that to call this property using "props.FetchAPIResponse"
function matchDispatchToProps(dispatch: any) {
  // bind the action to be executed
  return bindActionCreators({ FetchAPIResponse: fetchAPIResponse }, dispatch);
}

// export the component using the connect from Redux
// pass the functions that connect the props and the actions
export default connect(mapStateToProps, matchDispatchToProps)(Main); // the name of the component
