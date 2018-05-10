import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Temp from './pages/Temp';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Temp} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
