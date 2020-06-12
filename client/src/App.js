import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/places/new" component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default App;
