import React from "react";
import PlaceItem from "./PlaceItem";
import "../../shared/components/UIElements/Card";
import "./PlaceList.css";

const PlaceList = ({ placeItems }) => {
  return !placeItems.length ? (
    <Card>
      <h2>No places found, maybe create one?</h2>
      <button>Share Place</button>
    </Card>
  ) : (
    placeItems.map((place) => <PlaceItem key={place.id} {...place} />)
  );
};

export default PlaceList;
