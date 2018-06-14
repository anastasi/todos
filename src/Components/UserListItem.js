import React from 'react';
import { Link } from "react-router-dom";
import { CollectionItem, Icon } from 'react-materialize';
import "../styles/List.css";


const UserListItem = props => (
  // <Link to={`/profile/${props.item.id}`} >
  <Link to={{ pathname: `/profile/${props.item.id}`, state: { username: `${props.item.name}`} }} >
    <CollectionItem className="ListItem">{props.item.name} <Icon right small>chevron_right</Icon></CollectionItem>
  </Link>
)

export default UserListItem;