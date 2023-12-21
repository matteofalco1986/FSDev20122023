import React from "react";
import { Form, Button } from 'react-bootstrap';

class AddComment extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Submit a comment</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Type your comment in" />
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