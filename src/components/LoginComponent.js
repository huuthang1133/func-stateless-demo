import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function LoginComponent(props) {
    return (
        <div className="container">
            <h1>
                Login
            </h1>
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email"/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password"/>
                </FormGroup>
                <Button color="primary">Login</Button>
            </Form>
        </div>
    );
}

export default LoginComponent;