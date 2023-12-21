import React from "react";
import { Form, Button } from 'react-bootstrap';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                review: '',
                rating: 1
        }
    }
    render() {
        return (
            <Form onSubmit={(event) => {
                event.preventDefault();
                // POST request
                this.setState({
                    review: '',
                    rating: 1
                })
            }}>
                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Type your comment in"
                        className="mb-3"
                        rows={5}
                        value={this.state.review}
                        onChange={(e) => this.setState({
                            ...this.state,
                            review: e.target.value,
                        })} />
                    <Form.Control
                        as="select"
                        type="text"
                        placeholder="Type your comment in"
                        value={this.state.rating}
                        onChange={(e) => this.setState({
                            ...this.state,
                            rating: e.target.value,
                        })}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default AddComment;