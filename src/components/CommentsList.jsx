// maps comment area fetch result (array of comments) -> functional component ( list group o modal! )
import { ListGroup } from "react-bootstrap"

const CommentsList = (props) => {
    return (
        <ListGroup>
            {
                props.comments.map(c =>  
                    <ListGroup.Item key={c.elementId}>
                        <ListGroup>
                        <ListGroup.Item>{c.comment}</ListGroup.Item>
                        <ListGroup.Item>{c.rate} </ListGroup.Item>       
                        </ListGroup>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default CommentsList