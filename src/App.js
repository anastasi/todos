import React from "react";
import { Switch, Route } from "react-router-dom";
import UsersContainer from './Containers/UsersContainer';
import ProfileContainer from './Containers/ProfileContainer';

const ParamsExample = () => (
  <Switch>
    <Route path="/profile/:id" component={ProfileContainer} />
    <Route path="/" component={UsersContainer} />
  </Switch>
);

export default ParamsExample;