import React from 'react';
import ReactDOM from 'react-dom';

export default function Header(props) {
    return(
        <h1>Hello, {props.title ? props.title : "User"}</h1>
    )
}