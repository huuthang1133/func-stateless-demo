import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComponent(props) {
    const { title, description } = props;
    return (
      <div className="col-3">
        <Card>
          <CardImg top width="100%" src="https://loremflickr.com/320/240" alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

  
export default CardComponent;