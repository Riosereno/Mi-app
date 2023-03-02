import React from "react";
import Button from "../Button/Button";

import "./Card.css";

interface Friend {
  name: string;
  logo: string;
  description: string;
}

interface Props {
  friend: Friend;
  changeFriend: () => void;
}

const Card = ({ friend, changeFriend }: Props) => {
  return (
    <section className="card">
      <div className="card__container-img">
        <img src={friend.logo} alt={friend.name} />
      </div>
      <h1 className="card__title">{friend.name}</h1>
      <p className="card__description">{friend.description}</p>

      <div className="container-btn">
        <Button onClick={changeFriend} />
      </div>
    </section>
  );
};

export default Card;
