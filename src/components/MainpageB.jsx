import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import "bootstrap/dist/css/bootstrap.min.css";

class MainpageB extends Component {
  state = {
    data: [],
    // ^^^^^^^^^
    isSelected: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=829a56e3&s="${this.props.title.toLowerCase()}"&type=movie&page=1`,
        {
          method: "GET",
        }
      );

      let responsejson = await response.json();

      this.setState({
        data: responsejson.Search,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <section className="bg-dark">
        
        <Container className="py-5">
        <h2 className="mn-50">{this.props.title}</h2>
          <Row>
            {this.state.data.slice(0,6).map((obj) => (
              <Col  className=" no-gutters mb-2">
                  {/* ^^^^^^^^^ */}
                <Card>
                  <Card.Img onClick={()=> this.setState({isSelected: !this.state.isSelected})} key={obj.imdbID}
                    variant="top"
                    src={obj.Poster}
                    className="img-fluid"
            
                  />
                  {this.state.isSelected && <CommentArea movieId={obj.imdbID}/>}
                </Card>
              </Col>
            ))}
          </Row>

          

        </Container>
        {/* ^^^^^^^^^ */}
        {/* {
            this.state.isSelected && <CommentArea movieId={this.props.obj.imdbID}/>
        } */}
      </section>
    );
  }
}
export default MainpageB;
