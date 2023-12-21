import React from "react";
import { Card, Button } from 'react-bootstrap';
import SingleComment from "./SingleComment";

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='d-flex justify-content-between align-items-center'>
                {this.props.comments.map((comment) => (
                    <>
                        <SingleComment singleReview={comment}/>
                        <Button variant='danger'>X</Button>
                    </>
                ))}
            </div>
        )
    }
}


export default CommentList;