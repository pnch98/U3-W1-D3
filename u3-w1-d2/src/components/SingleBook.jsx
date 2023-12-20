import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  switchState = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Card
        className="mb-3"
        style={
          this.state.selected ? { border: "2px solid lightblue", backgroundColor: "lightblue" } : { border: "none" }
        }
        onClick={this.switchState}
      >
        <div className="overflow-hidden" style={{ height: "300px" }}>
          <Card.Img variant="top" src={this.props.img} />
        </div>
        <Card.Body style={{ height: "200px" }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.price}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
