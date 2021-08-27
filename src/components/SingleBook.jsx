import React from "react";
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";


class SingleBook extends React.Component {

    state = {
        isSelected: false
    }
  
  render(){
      return (
      <>
          <Container>
              <Card 
              //isSelected:true -> no toggle
              //isSelected:!isSelected -> toggle
              onClick={()=> this.setState({isSelected: !this.state.isSelected})}
              style={{border: this.state.isSelected ? '2px solid pink' : 'none'}}
              >
                <Card.Img variant="top" src={this.props.singlebook.img}/>
                <Card.Body>
                  <Card.Title>{this.props.singlebook.title}</Card.Title>
                </Card.Body>
              </Card>
              
          </Container>
            {
                this.state.isSelected && <CommentArea movieId={this.props.singlebook.asin}/> // !!! "imdbID", not asin
            }
      </>
    );
  }
};

export default SingleBook;
