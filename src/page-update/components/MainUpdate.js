import React from 'react'
import FormUpdate from './UpdateForm'


export default function Main ({id}) {
    return(
        <main className="main">
            <h1>Update product</h1>
            <FormUpdate id={id}/>
        </main>
    )
}