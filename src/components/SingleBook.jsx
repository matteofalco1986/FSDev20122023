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

    handleHighlight(){
        if (this.state.selected === false){
            this.setState({selected: true});
            document.getElementById(`${this.props.id}`).classList.add('selected');
        } else {
            this.setState({selected: false});
            document.getElementById(`${this.props.id}`).classList.remove('selected');
        }
    }



    render(){
        return (
            <Col xs={12} md={3} key={this.props.id}>
                <Card id={this.props.id} className='book-cover' onClick={this.handleHighlight}>
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