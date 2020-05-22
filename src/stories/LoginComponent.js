import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import LoginComponent from '../components/LoginComponent.js'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

storiesOf('LoginComponent', module)
  .add(
    'default',
    () => (
      <LoginComponent
        avatar=""
        name="Thang"
        email="vohuuthang9595@gmail.com"
        password="123456"      
      />
    )
  );