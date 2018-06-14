import React from 'react';
import BackButton from "../Components/BackButton";
import { Row, Col, Collection } from 'react-materialize';

const List = props => {
  const ListItem = props.listItem
  const showBackButton = props.showBackButton || false


  return (
    <Row>
      <Col s={4} offset='s4' className='grid-example'>
        <h2>{ props.title }</h2>
        { showBackButton &&
          <BackButton/>
        }

        <Collection>
          { props.items.map(item =>
            <ListItem item={item} key={item.id}/>
          )}
        </Collection>
      </Col>
    </Row>
  )
}

export default List