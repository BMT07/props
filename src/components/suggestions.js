import { Card } from "react-bootstrap";

function Sugggestions({suggestions}) {
    return (
      <div>
  {suggestions.map((suggestion)=>(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{suggestion.title}</Card.Title>
        <Card.Text>{suggestion.description}</Card.Text>
        <Card.Text><iframe width="260" height="200" src={suggestion.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Card.Text>
      </Card.Body>
    </Card>
  ))
  }
        
      </div>
    );
  }
  
  export default Sugggestions;
  