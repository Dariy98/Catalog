import React from 'react'
import { Button } from 'react-bootstrap';


export default function Header () {
    return(
        <header className="header">
            <Button variant="success" size="lg" block href="/add">
                Create new product
            </Button>
        </header>
    )
}