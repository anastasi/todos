import React from 'react';
import { CollectionItem, Icon } from 'react-materialize';
import "../styles/List.css";

const ProfileListItem = props => (
  <CollectionItem className="ListItem">
    <Icon left small>{ props.item.completed ? (
        'check_box'
      ) : (
        'check_box_outline_blank'
      )}
    </Icon>
    {props.item.title}
  </CollectionItem>
)

export default ProfileListItem;