import React from 'react';
import { Button } from 'react-bootstrap';

export default function Welcome () {
    return(
        <div className="welcome">
            <h1 className="title">Do you have an account?</h1>
            <Button variant="primary" size="lg" block className="button-welcome" href="/login">No</Button>
            <Button variant="success" size="lg" block href="/singIn">Yes</Button>
        </div>
    )
}