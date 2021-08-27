import React from 'react'
import SingleBook from "./SingleBook"
import { Col, Container, Form, Row } from "react-bootstrap"

class BookList extends React.Component {

    state = {
        query: '',
        selectedElementId: null
    }

    render() {
        return (
           <Container>
               <Row>
                   <Col>
                        <Form>
                            <Form.Group className="my-5" controlId="formBasicEmail">
                                <Form.Label>Looking for some book?</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Search books..." 
                                //value is what is in query
                                value={this.state.query}
                                //what is in query is what the user types
                                //setState: overwrites state
                                onChange={(e) => this.setState({query: e.target.value})}
                                />
                            </Form.Group>
                        </Form>
                   </Col>
               </Row>

               <Row>
                    {
                        // remember this > props > property
                        //this = BookList
                        this.props.allBooks
                        .filter(currBook => currBook.title.toLowerCase().includes(this.state.query.toLowerCase()))
                        .map(currBook => 
                            <Col md={4}>
                                <SingleBook singlebook={currBook}/>
                            </Col>)
                    }
               </Row>
           </Container>
        )
    }
}



export default BookList