import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

function renderDish({ dish }) {
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

function renderComments({ comments }) {
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
              }).format(new Date(Date.parse(comments.date)))}
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

const Dishdetail = (props) => {
  // console.log(props.dishSelect)
  const { dishSelect } = props;
  console.log(dishSelect);

  return dishSelect ? (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(dishSelect)}</div>
      <div className="col-12 col-md-5 m-1">
        {renderComments(dishSelect.comments)}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Dishdetail;
