// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/configStore";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalRoutes } from "./routes";

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalRoutes />
    </Router>
  </Provider>
);

export default App;