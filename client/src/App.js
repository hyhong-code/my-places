import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/places/new" component={NewPlace} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
