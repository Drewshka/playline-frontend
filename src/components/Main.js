import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Main() {
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/players",
      responseType: "json",
    }).then((results) => {
      console.log(results.data);
      const players = results.data;
      setPlayers(players);
    });
  };

  useEffect(() => {
    getPlayers();
  }, []);

  console.log(players);
  return (
    <main>
      <h1>Main</h1>

      {/* <section className="playerCards">
        {players &&
          players.map((player, index) => {
            return (
              <PlayerCard
                key={index}
                name={player.last_name}
                points={player.points}
              />
            );
          })}
      </section> */}
    </main>
  );
}
