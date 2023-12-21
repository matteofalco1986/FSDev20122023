import React from "react";
import { Card, Button } from 'react-bootstrap';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='d-flex justify-content-between align-items-center'>
                <Card.Text className='m-0'>
                    {this.props.bookArray.comment}
                </Card.Text>
                <Button variant='danger'>X</Button>
            </div>
        )
    }
}


export default CommentList;