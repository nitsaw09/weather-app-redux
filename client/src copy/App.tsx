import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./store/store";
import Main from "./components/Weather.component";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={Store}>
      <div className="container-fluid mt-4">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
