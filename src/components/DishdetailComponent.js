import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    // console.log(dish)
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    // console.log(comments)
    if (comments != null) {
      let list = comments.map((comments) => {
        let date = comments.date;

        return (
          <li key={comments.id}>
            <div>
              <p>{comments.comment}</p>
              <p>
                --{comments.author},
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          </li>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{list}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    // console.log(this.props.dishSelect)
    const { dishSelect } = this.props;
    console.log(dishSelect);

    return dishSelect ? (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dishSelect)}</div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(dishSelect.comments)}
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default Dishdetail;
