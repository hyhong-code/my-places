import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/UIElements/Avatar";
import Card from "../../shared/UIElements/Card";
import "./UserItem.css";

const UserItem = ({ id, name, image, places }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {places} {places > 1 ? "Places" : "Place"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
