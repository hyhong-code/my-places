import React from "react";
import "./UserItem.css";

const UserItem = ({ id, name, image, places }) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={image} alt={name} />
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>
            {places} {places > 1 ? "Places" : "Place"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
