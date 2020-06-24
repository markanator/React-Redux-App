import React from 'react';
import Header from '../components/header';

export default function Layout (props){


    return (
        <React.Fragment>
            <Header />
            {props.children}
        </React.Fragment>
    )
}