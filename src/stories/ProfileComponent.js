import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import ProfileComponent from '../components/ProfileComponent.js'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

storiesOf('ProfileComponent', module)
  .add(
    'default',
    () => (
      <ProfileComponent
        avatar=""
        name="Thang"
        email="vohuuthang9595@gmail.com"
        password="123456"   
      />
    )
  );