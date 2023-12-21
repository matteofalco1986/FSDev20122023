import { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';


class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            reviews: []
        }
    }

    fetchData = (id) => {
        fetch('https://striveschool-api.herokuapp.com/api/books/' + id + '/comments', {
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
            // console.log(data);
            this.setState({
                reviews: data
            })
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }



    render() {
        return (
            <Card
                onClick={() => {
                    this.setState({ selected: !this.state.selected });
                    if (!this.state.selected) {
                        this.fetchData(this.props.book.asin);
                    }
                    // console.log(this.state.reviews);
                }}
                style={{ border: this.state.selected ? '3px solid red' : 'none' }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>
                        {this.props.book.title}
                    </Card.Title>
                    {this.state.selected && this.state.reviews.map((review) => {
                        return (
                            <CommentArea bookReview={review} />
                        )
                    })}
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook
