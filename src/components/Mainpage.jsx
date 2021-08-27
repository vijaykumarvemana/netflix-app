import {Component} from 'react'
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Mainpage extends Component {

    state = {
        data : [],
        movies :['titanic', 'harry%20potter', 'batman']
    }

    componentDidMount = () => {
        try {
           
            let responseofpromises= this.state.movies.map(categ => fetch('http://www.omdbapi.com/?apikey=829a56e3&s='+categ,{
                method: 'GET'
            })
            .then(responsepromises => responsepromises.json())
              )
             Promise.all(responseofpromises).then(arrayofresponsesdata => {
              
                   console.log(arrayofresponsesdata)
                let work = arrayofresponsesdata.map(ele => {
                    return ele.Search
                })
                console.log("hey Iam Work ", work)
                this.setState({
                    data : work
                })
                console.log("hey Iam state updated", this.state.data[0])
              })
           
        }
             catch (error) {
            console.log(error)
        }
    }

    render(){
        console.log("hello Render")
        return(
            <>
                <Container className='mt-5'>
                <Form>
                    <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="search ...." />
                        </Form.Group>
                    
                </Form>
                    <Row><h3>{this.state.movies[0]}</h3></Row>
                    <Row className='mt-2'>
                        
                    {this.state.data.length > 0 && this.state.data[0].map(ele => {
                       return <Col sm={6} md={3} lg={3} className='px-1 no-gutters mb-2'>
                        <Card >
                            <Card.Img variant="top" src={ele.Poster} className='img-fluid' style={{ height: '25rem'}}/>
                           
                            </Card>
                        </Col>
                        
                        })
                    }
                    </Row>
                    <Row><h3>{this.state.movies[1]}</h3></Row>
                    <Row className='mt-2'>
                    {this.state.data.length > 0 && this.state.data[1].map(ele => {
                       return <Col sm={6} md={3} lg={3} className='px-1 no-gutters mb-2'>
                        <Card >
                            <Card.Img variant="top" src={ele.Poster} className='img-fluid' style={{ height: '25rem'}}/>
                           
                            </Card>
                        </Col>
                        
                        })
                    }
                    </Row>
                    <Row><h3>{this.state.movies[2]}</h3></Row>
                    <Row className='mt-2'>
                    {this.state.data.length > 0 && this.state.data[2].map(ele => {
                       return <Col sm={6} md={3} lg={3} className='px-1 no-gutters mb-2'>
                        <Card >
                            <Card.Img variant="top" src={ele.Poster} className='img-fluid' style={{ height: '25rem'}}/>
                           
                            </Card>
                        </Col>
                        
                        })
                    }
                    </Row>
                </Container>

                
            </>
        )
    }
}
export default Mainpage
