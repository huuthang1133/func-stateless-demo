import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import CardComponent from '../components/cardComponent.js';
import { withInfo } from '@storybook/addon-info';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

storiesOf('CardComponent', module)
  .add(
    'default',
    () => (
      <CardComponent
        title="Sự lụi tàn của đồng tiền"   
        description="Sự lụi tàn của đồng tiền"   
      />
    )
  );

