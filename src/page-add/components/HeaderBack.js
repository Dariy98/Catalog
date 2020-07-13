import React from 'react'
import { Button } from 'react-bootstrap';


export default function Header () {
    return(
        <header className="header">
            <Button variant="outline-primary" size="lg" block href="/products">
                Return back
            </Button>
        </header>
    )
}