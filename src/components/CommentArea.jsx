import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';


class CommentArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        }
    }
    componentDidMount = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/books/${this.props.bookId}/comments`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0Mzg0NGI1MjViYjAwMThlZDA3ZDUiLCJpYXQiOjE3MDMxNzE1OTgsImV4cCI6MTcwNDM4MTE5OH0.19JGKqZEjq_wmFal7XJVWRdL6nCr4XKaXSvbqKCpzB0'
            }
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Network response not ok')
            }
            return res.json();
        }).then((data) => {
            console.log('component did mount');
            // console.log(data)
            this.setState({
                reviews: data
            })
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }
    render() {
        console.log('render')
        console.log(this.state.reviews)
        return (
            <>
                <CommentList comments={this.state.reviews}/>
                <AddComment />
            </>
        )
    }
}

export default CommentArea;