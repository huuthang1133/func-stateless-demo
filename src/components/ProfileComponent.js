import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ProfileComponent(props) {
    const { avatar, name, email, password } = props;
    return(
        <div className="container">
            <h1>
                Thông tin Cá Nhân
            </h1>
            <table style={{width:1000}}>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                <tr>
                    <td>{avatar}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                </tr>
            </table>
            <h1>
                Update
            </h1>
            <Form method="POST" enctype="multipart/form-data">
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type="email" name="name" />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='email' name='email' />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input type='password' name='password' />
                </FormGroup>  
            </Form>            
        </div>
    );
}

export default ProfileComponent;