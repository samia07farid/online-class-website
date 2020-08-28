import React from 'react';
import './Subjects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Card, Button } from 'react-bootstrap';


const Subjects = (props) => {
    const {image, name, price, instructor} = props.subject;

    return (
        <div className="card-container">
        <div className="col-md-3 each-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <h4>${price}</h4>
                    <p className="instructor">Instructor:<i> {instructor} </i></p>
                    <Button
                        variant="danger"
                        className="icon"
                        onClick={() => props.handleAddCourse(props.subject)}> 
                    <FontAwesomeIcon className="plus-icon" icon={ faCartPlus }/>Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
        </div>

    );
};

export default Subjects;