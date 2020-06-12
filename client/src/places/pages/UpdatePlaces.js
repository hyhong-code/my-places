import React from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Havana",
    description:
      "Havana is the capital city, largest city, province, major port, and leading commercial center of Cuba.",
    image:
      "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2450&q=80",
    address: "27 de Noviembre, La Habana, Cuba",
    coordinates: {
      lat: 21.5218,
      lng: 77.7812,
    },
    creatorId: "u1",
  },
  {
    id: "p2",
    title: "Havana",
    description:
      "Havana is the capital city, largest city, province, major port, and leading commercial center of Cuba.",
    image:
      "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2450&q=80",
    address: "27 de Noviembre, La Habana, Cuba",
    coordinates: {
      lat: 77.7812,
      lng: 21.5218,
    },
    creatorId: "u2",
  },
];

const UpdatePlaces = ({
  match: {
    params: { placeId },
  },
}) => {
  const placeToUpdate = DUMMY_PLACES.find((place) => place.id === placeId);
  if (!placeToUpdate) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={placeToUpdate.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={placeToUpdate.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlaces;
