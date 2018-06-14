import React from 'react';
import { CollectionItem, Icon } from 'react-materialize';

const ProfileListItem = props => (
  <CollectionItem>
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