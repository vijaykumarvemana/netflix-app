import React from "react"
import AddComments from "./AddComments"
import CommentsList from "./CommentsList"

class CommentArea extends React.Component {
    state = {
        movieComments: []
    }

    async componentDidMount() {
        try {
            const movieId = this.props.movieId
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ movieId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MzAwMTAwODMsImV4cCI6MTYzMTIxOTY4M30.IYE6DU5jYldk8SdSocMrRqffiucDB0xBM0HT5k_OU3w"
                }
            })

            if(response.ok) {
                const commentData = await response.json()
                // console.log(commentData)
                this.setState({movieComments: commentData})
            }
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <>
                <CommentsList comments={this.state.movieComments}/>
                <AddComments />
            </>
        )
    }
}

export default CommentArea