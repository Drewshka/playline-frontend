import React from "react";
import "./PlayerCard.scss";

export const PlayerCard = ({ name, points, index }) => {
  const image = require(`../../assets/headshots/${name}.png`);

  return (
    <div className="playerCard">
      <figure className="playerCard_figure">
        <img className="playerCard_img" src={image} alt="headshots" />
      </figure>
      <div className="playerCard_info">
        <h4 className="playerCard_info-name">{name}</h4>
        <div>
          <p className="playerCard_info-points">{points}</p>
        </div>
        <p className="playerCard_info-pts">PTS</p>
      </div>
    </div>
  );
};
