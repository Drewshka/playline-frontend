import React from "react";
import "./PlayerCard.scss";

export const PlayerCard = ({ name, points }) => {
  const image = require(`../../assets/headshots/${name}.png`);

  console.log(name);

  return (
    <div className="playerCard">
      <figure
        className="playerCard_figure"
        // style={{
        //   zIndex: image === "../../assets/headshots/James.png" ? 200 : 0,
        // }}
      >
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
