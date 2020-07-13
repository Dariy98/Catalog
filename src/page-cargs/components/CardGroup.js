import React, {useState, useEffect} from 'react'
import { CardGroup} from 'react-bootstrap';
import Cards from './Card'

export default function CardGrid () {
    // const [cards, setCard] = useState([])

    // useEffect(() => {
    //     fetch("https://fir-catalog-218d0.firebaseio.com.json", {
    //         method: "GET",
    //         headers: {
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => setCard(data));
    // }, [])

    // console.log([cards])

    return(
        <CardGroup className="cards-grid">
            <Cards/>
            <Cards/>
            <Cards/>
        </CardGroup>
    )
}