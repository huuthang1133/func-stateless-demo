import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserComponent(props) {
    const {name, book} = this.props;
    return(
        <div className="container">
            <ul>
                <li>
                    <span>{name} </span>
                    <span> {book} </span>
                    <span> <a href='/users/delete/user._id'>Delete</a></span>
                </li>                 
            </ul>
        </div>
    );
}

export default UserComponent;