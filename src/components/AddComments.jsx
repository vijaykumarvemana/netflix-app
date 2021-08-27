// POST -> adds comment to commentArea's fetch -> we need a state -> class component

import React from "react";
import { Button, Form } from "react-bootstrap";


class AddComments extends React.Component {
    
    state = {
      commentToPost: {
        comment: '',
        rate: 1,
        elementId: "tt0304141"
      }
    }
  
    postComment = async  (e) => {
      e.preventDefault()
      console.log('You did it')
      try {
        // const elementId = this.props.elementId
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
          method: 'POST',
          body: JSON.stringify(this.state.commentToPost),
          headers: {
            'Content-type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MzAwMTAwODMsImV4cCI6MTYzMTIxOTY4M30.IYE6DU5jYldk8SdSocMrRqffiucDB0xBM0HT5k_OU3w"
          }
        })
        if(response.ok){
          console.log('aaayy caramba')

        } else {
          console.log('no bueno chico')
        }
      
      } catch (error) {
        console.log(error)
      }
    }

    render() {
    return (
      <div className="text-center">
        <p>Add your comment!</p>
        <Form onSubmit={this.postComment}>
          <Form.Group>
            <Form.Label>Review this movie</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.commentToPost.comment}
              onChange={(e) => this.setState({commentToPost: {...this.state.commentToPost, comment: e.target.value}})}
            />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Rate it</Form.Label>
            <Form.Control
              as="select"
              value={this.state.commentToPost.rate}
              onChange={(e) => this.setState({commentToPost: {...this.state.commentToPost, rate: e.target.value}})}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Add comment
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComments;