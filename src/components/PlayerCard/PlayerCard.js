import React from "react";
import "./PlayerCard.scss";

export const PlayerCard = ({ name, points }) => {
  // const image = require(`../assets/headshots/${name}.png`);
  const image = require(`../../assets/headshots/${name}.png`);

  console.log(name);

  return (
    <div className="playerCard">
      <figure>
        <img className="playerCard_img" src={image} alt="headshots" />
      </figure>
      <div className="playerCard_info">
        <h3>{name}</h3>
        <div className="playerCard_info-points">
          <p className="points">{points}</p>
        </div>
        <p className="playerCard_points">pts</p>
      </div>
    </div>
  );
};
