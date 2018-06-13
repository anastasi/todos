import React from "react";
import { Route, Link } from "react-router-dom";
import UsersContainer from './UsersContainer';
import ProfileContainer from './ProfileContainer';

const ParamsExample = () => (
  <div>
    <Route path="/users" component={UsersContainer} />
    <Route path="/profile/:id" component={ProfileContainer} />
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default ParamsExample;