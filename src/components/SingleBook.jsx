import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

class SingleBook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false,
        }
        this.handleHighlight = this.handleHighlight.bind(this);
    }

    handleHighlight(event){
        this.setState({selected: event.target.value})
    }

    

    render(){
        return (
            <Col xs={12} md={3} key={this.props.id}>
                <Card className='book-cover'>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )

    }
}

export default SingleBook;