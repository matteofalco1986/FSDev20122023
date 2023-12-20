import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row>
                {this.props.booksArray.map(book => {
                    return (
                        <SingleBook id={book.asin} img={book.img} title={book.title} />
                    )
                })}
            </Row>
        )
    }
}


export default BookList;