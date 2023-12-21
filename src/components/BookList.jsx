import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
    }
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Form.Group className='d-flex align-items-center justify-content-between'>
                            <Form.Label className='m-0 mr-3'>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {this.props.books
                        .filter((book) =>
                            book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
                        )
                        .map((b) => (
                            <Col xs={12} md={4} key={b.asin}>
                                <SingleBook book={b} />
                            </Col>
                        ))}
                </Row>
            </>
        )
    }
}

export default BookList
