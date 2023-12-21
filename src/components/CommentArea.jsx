import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';


class CommentArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <CommentList bookArray={this.props.bookReview} />
                <AddComment />
            </>
        )
    }
}

export default CommentArea;