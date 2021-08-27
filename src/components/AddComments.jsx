// POST -> adds comment to commentArea's fetch -> we need a state -> class component

import React from "react";
import { Button, Form } from "react-bootstrap";


class AddComments extends React.Component {
    
    state = {
      commentToPost: {
        comment: '',
        rate: 1,
        elementId: ''
      }
    }
  
    postComment = async  (e) => {
      e.preventDefault()
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ movieId, {
          method: 'POST',
          body: JSON.stringify(this.state.commentToPost),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MzAwMTAwODMsImV4cCI6MTYzMTIxOTY4M30.IYE6DU5jYldk8SdSocMrRqffiucDB0xBM0HT5k_OU3w'
          }
        })
        if(response.ok){
          const data = await response.json()
        } else {

        }
      
      } catch (error) {
        console.log(error)
      }
    }


    render() {
    return (
      <div className="text-center">
        <p>Add your comment!</p>
        <Form.Group>
          <Form.Label>Review this movie</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            // value={}
            // onChange={}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rate it</Form.Label>
          <Form.Control
            as="select"
            // value={}
            // onChange={}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="success" type="submit">
          Add comment
        </Button>
      </div>
    );
  }
}

export default AddComments;