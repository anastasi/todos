import React from 'react';
import { CollectionItem, Icon } from 'react-materialize';

const ProfileListItem = props => (
  <CollectionItem>
    {props.item.title} <Icon right small>chevron_right</Icon>
  </CollectionItem>
)

export default ProfileListItem;