import React from "react";
import PlaceList from "../components/PlaceList";

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
      lat: "77.7812",
      lng: "21.5218",
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
      lat: "77.7812",
      lng: "21.5218",
    },
    creatorId: "u2",
  },
];

const UserPlaces = ({
  match: {
    params: { userId },
  },
}) => {
  const userPlaces = DUMMY_PLACES.filter((place) => place.creatorId === userId);
  return <PlaceList placeItems={userPlaces} />;
};

export default UserPlaces;
