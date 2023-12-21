import React from "react";
import { Card } from 'react-bootstrap';

const SingleComment = (props) => {
    return (
        <Card.Text className='m-0'>{props.singleReview.comment}</Card.Text>
    )
}

export default SingleComment;