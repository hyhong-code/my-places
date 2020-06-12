import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlaces from "./places/pages/UpdatePlaces";

const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/:userId/places" component={UserPlaces} />
          <Route exact path="/places/new" component={NewPlace} />
          <Route exact path="/places/:placeId" component={UpdatePlaces} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default App;
