import React, {useState, useEffect} from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import * as firebase from 'firebase'


const useDatabase = entry => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const ref = firebase.database().ref(entry);
      ref.on("value", snapshot => {
        const array = [];
        // For each data in the entry
        snapshot.forEach(el => {
          // Push the object to the array
          // If you also need to store the unique key from firebase,
          // You can use array.push({ ...el.val(), key: el.key });
          array.push({ ...el.val(), key: el.key });
        //   array.push(el.val());
        });
        setData(array);
      });
      // Clean-up function
      return () => ref.off("value");
    }, [entry]);
  
    return data;
};

export default function Cards () {
    
    const cards = useDatabase("products");

    console.log("cards", cards)

    return(
        <div className="cards-grid">
            {cards.map((card) => {
                return (
                    <Card key={card.key} className="card-custom">
                        <Card.Img variant="top" src={card.img} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                            {card.desc}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <span>{card.price}$</span>
                                <span className="card-discount">discount: {card.discount}</span>
                            </ListGroupItem>

                            {card.discount !== "" ? 
                                <ListGroupItem>
                                    last day: {card.date}
                                </ListGroupItem>
                                : null
                            }
                            
                        </ListGroup>
                        <Card.Body>
                            <Button variant="danger" size="lg" style={{ marginRight: '15px' }}>Delete</Button>
                            <Button variant="primary" size="lg" style={{ marginLeft: '55px' }} href={`/update/${card.key}`}>Update</Button>
                        </Card.Body>
                    </Card> 
                )
            })}
        </div>
    )
}