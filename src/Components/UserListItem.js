import React from 'react';
import { Link } from "react-router-dom";
import { CollectionItem, Icon } from 'react-materialize';

const UserListItem = props => (
  <Link to={`/profile/${props.item.id}`}>
    <CollectionItem>{props.item.name} <Icon right small>chevron_right</Icon></CollectionItem>
  </Link>
)

export default UserListItem;