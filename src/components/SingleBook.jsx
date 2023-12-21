import { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';


class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })}
                    style={{ border: this.state.selected ? '3px solid red' : 'none' }} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>
                        {this.props.book.title}
                    </Card.Title>
                    {this.state.selected && (
                        <CommentArea bookId={this.props.book.asin} />
                    )}
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook
