import React, {Component} from 'react';
import { withInfo } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import UserComponent from '../components/UserComponent.js'

storiesOf('UserComponent', module)
  .add(
    'default',
    () => (
      <UserComponent
        name="Thang"
        book="Thầy giáo ba"
        id=""
      />
    )
);