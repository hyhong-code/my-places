import React from "react";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";

const PlaceList = ({ placeItems }) => {
  return !placeItems.length ? (
    <div className="place-list center">
      <Card>
        <h2>No places found, maybe create one?</h2>
        <button>Share Place</button>
      </Card>
    </div>
  ) : (
    <ul className="place-list">
      {placeItems.map((place) => (
        <PlaceItem key={place.id} {...place} />
      ))}
    </ul>
  );
};

export default PlaceList;
