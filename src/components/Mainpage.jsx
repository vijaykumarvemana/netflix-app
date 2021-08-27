import {Component} from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


class Mainpage extends Component {

    state = {
        data : []
        
    }

    componentDidMount = async() => {
        try {
           
            let response = await fetch('http://www.omdbapi.com/?apikey=829a56e3&s=titanic',{
                method: 'GET'
            })
            //console.log(response)
            let responsejson = await response.json()
            //console.log(responsejson.Search)
                this.setState({
                   data : responsejson.Search
                })
           
            console.log("Hey Iam arrays",this.state.data)
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
                    <Row>
                       { this.state.data.map(obj => 
                       <Col sm={6} md={3} lg={3} className='px-1 no-gutters mb-2'>
                        <Card >
                            <Card.Img variant="top" src={obj.Poster} className='img-fluid' style={{ height: '25rem'}}/>
                           
                            </Card>
                        </Col>
                        
                       )
                    }
                      
                       
                    
                    </Row>
                </Container>

                
            </>
        )
    }
}
export default Mainpage