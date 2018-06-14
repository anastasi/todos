import React from "react";
import { Route } from "react-router-dom";
import UsersContainer from './Containers/UsersContainer';
import ProfileContainer from './Containers/ProfileContainer';

const ParamsExample = () => (
  <div>
    <Route path="/users" component={UsersContainer} />
    <Route path="/profile/:id" component={ProfileContainer} />
  </div>
);

export default ParamsExample;