import "./MainCard.scss";
import React from "react";
import data from "../../data/players.json";
import { PlayerCard } from "../PlayerCard/PlayerCard";
import { Progress } from "../Progress/Progress";
import { CardHeader } from "../CardHeader/CardHeader";
import { Buttons } from "../Buttons/Buttons";
import { Downloads } from "../Downloads/Downloads";

class MainCard extends React.Component {
  state = {
    players: data,
  };

  render() {
    const players = this.state.players.players;

    return (
      <div className="MainCard">
        <Progress />
        <CardHeader />
        <section className="playerCards">
          {players &&
            players.reverse().map((player, i) => {
              return (
                <PlayerCard
                  key={i}
                  name={player.last_name}
                  points={player.points}
                />
              );
            })}
        </section>
        <Buttons />
        <Downloads />
      </div>
    );
  }
}

export default MainCard;
