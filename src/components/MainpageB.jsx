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
        "http://www.omdbapi.com/?apikey=829a56e3&s=titanic",
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
      <>
        <Container className="mt-5">
          <Row>
            {this.state.data.map((obj) => (
              <Col sm={6} md={3} lg={3} className="px-1 no-gutters mb-2">
                  {/* ^^^^^^^^^ */}
                <Card>
                  <Card.Img onClick={()=> this.setState({isSelected: !this.state.isSelected})} key={obj.imdbID}
                    variant="top"
                    src={obj.Poster}
                    className="img-fluid"
                    style={{ height: "25rem" }}
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
      </>
    );
  }
}
export default MainpageB;
