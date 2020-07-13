import React, {useState, useEffect} from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import * as firebase from 'firebase'

export default function Cards () {
    const [prod, setProducts] = useState({})
    const [cards, setCards] = useState([])

    useEffect(() => {
        firebase.database().ref("products").once("value", (data) => {
            const products = data.toJSON()
            setProducts(products)
            const idOfProducts = Object.keys(products)
            let arrOfProducts = [];

            // console.log("idOfProducts", idOfProducts, typeof idOfProducts)

            idOfProducts.forEach(id => {
                firebase.database().ref("products").child(`${id}`).once("value", (data) => {
                    arrOfProducts.push(data.toJSON())
                })
                // return arrOfProducts
            })
            setCards(arrOfProducts)
            // setCards([...arrOfProducts])
        })
    }, [])
   
    console.log("cards", cards)
 
    return(
        <div>
            {cards.map(c => {
                console.log(c)
                return (
                    <div>{c.title}</div>
                )
            })}
       </div>
        // <Card style={{ width: '18rem', margin: '10px' }}>
        //     <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/debGflUXvZwh5vPMVkVSYV9xtgzC0mf8f1G28xLUJe2jVXGAzD4QEHxUAdyJwHwl1pBsV9SemABHebwdSlG8gD9Q1pqZfjMJijutHd7b60aGhUlL" />
        //     <Card.Body>
        //         <Card.Title>Title</Card.Title>
        //         <Card.Text>
        //         Some quick example text to build on the card title and make up the bulk of
        //         the card's content.
        //         </Card.Text>
        //     </Card.Body>
        //     <ListGroup className="list-group-flush">
        //         <ListGroupItem>
        //             <span>price 1</span>
        //             <span>price 2</span>
        //         </ListGroupItem>
        //         <ListGroupItem>
        //             кол-во дней до скидки (не всегда)
        //         </ListGroupItem>
        //     </ListGroup>
        //     <Card.Body>
        //         <Button variant="danger" size="lg" style={{ marginRight: '15px' }}>Delete</Button>
        //         <Button variant="primary" size="lg" style={{ marginLeft: '55px' }} href="/update">Update</Button>
        //     </Card.Body>
        // </Card> 
    )
}