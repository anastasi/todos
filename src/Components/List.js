import React from 'react';
import BackButton from "../Components/BackButton";
import { Row, Col, Collection } from 'react-materialize';
import "../styles/List.css";

const List = props => {
  const ListItem = props.listItem
  const showBackButton = props.showBackButton || false


  return (
    <Row>
      <Col l={4} s={12} offset='l4'>
        <h2 className="Title">{ props.title }</h2>
        { showBackButton &&
          <BackButton/>
        }
      </Col>
      <Col l={4} s={12} offset='l4' className='grid'>
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